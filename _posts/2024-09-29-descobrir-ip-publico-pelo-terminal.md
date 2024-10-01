---
title: Descobrir IP público pelo terminal
categories: terminal ip curl
---

Às vezes precisamos descobrir qual é o nosso IP píblico on scripts, isso pode ser feito facilmente com uma ferramenta chamada `curl`.

## Usando `curl`

These services can be accessed with curl or a regular browser as well using http and https.

- [checkip.dyndns.org](checkip.dyndns.org)
- [ipinfo.io](ipinfo.io)
- [ipinfo.io/ip](ipinfo.io/ip)
- [ifconfig.me](ifconfig.me)
- [ifconfig.io](ifconfig.io)
- [ipecho.net/plain](ipecho.net/plain)
- [icanhazip.com](icanhazip.com)
- [checkip.amazonaws.com](checkip.amazonaws.com)

### Exemple

```sh
curl -s checkip.amazonaws.com
# 1.2.3.4
```

### Notas

#### ipinfo.io

Retorna mais informações sobre o IP em formato JSON.

#### checkip.amazonaws.com

Esse serviço, por algum motivo, consegue descobrir o IP atrás de proxies HTTP.

## Usando `dig`

Também podemos usar o comando `dig` ou qualquer outro programa de _lookup_ e realizar uma consulta usando o serviço myip do opendns.

```
dig +short myip.opendns.com @resolver1.opendns.com
# 1.2.3.4
```

```
dig +short myip.opendns.com @208.67.222.222
# 1.2.3.4
```