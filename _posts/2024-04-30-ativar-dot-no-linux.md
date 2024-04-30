---
title: Ativar DNS over TLS no Linux com systemd-resolved
categories: linux DNS systemd-resolved DoT
---

Atualmente, systemd-resolved gerencia as configurações de DNS na maioria das distribuições Linux. Geralmente usado com o NetworkManager para oferecer configurações por _link_, mas isso não nos possibilita ativar DNS seguro, ou DNS over TLS. Siga as instruções abaixo para ativar na sua distro.

## Configurando systemd-resolved

Crie um arquivo em `/etc/systemd/resolve.conf.d/99-dot.conf` com o seguinte conteúdo. Isso irá criar uma configuração global para o systemd-resolved com DoT e DNSSEC habilitados. Você pode remover a opção de DNSSEC, caso queira.

{% highlight toml %}
[Resolve]
DNS=1.1.1.1#cloudflare-dns.com 1.0.0.1#cloudflare-dns.com 
DNSSEC=yes
DNSOverTLS=yes
Domains=~.
{% endhighlight %}

## Disativar DNS no NetworkManager

Para evitar que o NetworkManager configure endereços de DNS, crie o arquivo `/etc/NetworkManager/conf.d/dns.conf` com o seguinte conteúdo.

{% highlight toml %}
[main]
dns=none
systemd-resolved=false
{% endhighlight %}

## Verificando

Depois dos passos acima, reinicie seu sistema. Depois execute `resolvectl status`, você devará ver a saída abaixo.

{% highlight text %}
Global
         Protocols: LLMNR=resolve -mDNS +DNSOverTLS DNSSEC=yes/supported
  resolv.conf mode: stub
Current DNS Server: 1.1.1.1#cloudflare-dns.com
       DNS Servers: 1.1.1.1#cloudflare-dns.com 1.0.0.1#cloudflare-dns.com

Link 2 (wlp1s0)
    Current Scopes: LLMNR/IPv4 LLMNR/IPv6
         Protocols: -DefaultRoute LLMNR=resolve -mDNS +DNSOverTLS DNSSEC=yes/supported

....
oter links
{% endhighlight %}

Depois, acesse `https://1.1.1.1/help` e você deverá ver a resposta abaixo.

![Cloudflare DoT check]({{ "/assets/images/posts/1.1.1.1_help.png" | relative_path}})
