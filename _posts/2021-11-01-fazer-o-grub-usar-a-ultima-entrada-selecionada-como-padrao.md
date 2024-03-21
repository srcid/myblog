---
title:  "Fazer o GRUB usar a última entrada selecionada como padrão"
categories: grub boot linux
---

Faço uso de _dual boot_ com Linux e Windows e sempre que o windows atualiza tenho que ficar 
esperando para selectionar a opção de boot.

## Solução

### Parametros

O GRUB possui parametros que podem alterados. O que nos interessa por enquando são esses: 

#### GRUB_DEFAULT

Esse parametro informa ao GRUB qual é opção de boot padrão.

#### GRUB_SAVEDEFAULT

Esse parametro informa ao GRUB que ele deve salvar a última opção de boot escolhida.

### Passo-a-passo

Abra o arquivo `/etc/default/grub` com seu editor preferido e com privilégios de administrador.

{% highlight shell %}
sudo nvim /etc/default/grub
{% endhighlight %}

Altere os valores dos parametros `GRUB_DEFAULT` e `GRUB_SAVEDEFAULT` como mostrado abaixo.

> GRUB_DEFAULT=saved

> GRUB_SAVEDEFAULT=true

Em seguida execute o comando abaixo para atulizar GRUB com os novos paramentros

{% highlight shell %}
sudo grub-update
{% endhighlight %}

Caso o comando grub-update não exista no sistema, use o seguinte comando

{% highlight shell %}
sudo grub-mkconfig -o /boot/grub/grub.cfg
{% endhighlight %}

## Referências

[GRUB Remember last choice](https://askubuntu.com/questions/148662/how-to-get-grub2-to-remember-last-choice)

[GRUB Simple configuration](https://www.gnu.org/software/grub/manual/grub/grub.html#Simple-configuration)
