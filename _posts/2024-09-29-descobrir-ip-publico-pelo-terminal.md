---
title: Descobrir IP público pelo terminal
categories: terminal ip curl
---

Às vezes precisamos descobrir qual é o nosso IP píblico on scripts, isso pode ser feito facilmente com uma ferramenta chamada `curl`.

## Usango `curl`

These services can be accessed with curl or a regular browser as well using http and https.

- [checkip.dyndns.org](checkip.dyndns.org)
- [ipinfo.io](ipinfo.io)
- [ipinfo.io/ip](ipinfo.io/ip)
- [ifconfig.me](ifconfig.me)
- [ifconfig.io](ifconfig.io)
- [ipecho.net/plain](ipecho.net/plain)
- [icanhazip.com](icanhazip.com)
- [checkip.amazonaws.com](checkip.amazonaws.com)

### Notas

#### ipinfo.io

Retorna mais informações sobre o IP em formato JSON.

#### checkip.amazonaws.com

Esse serviço, por algum motivo, consegue descobrir o IP atrás de proxies HTTP.

## Usando `dig`

Também podemos usar o comando `dig` ou qualquer outro programa de _lookup_.

```
dig +short myip.opendns.com @resolver1.opendns.com
```