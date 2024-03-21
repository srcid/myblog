---
title: "Alterar tamanho do papel em pdf no terminal"
categories: pdf terminal
---

As vezes preciso alterar a tamanho da folha de um arquivo pdf. Isso pode ser feito facilmente pela ferramenta de terminal __pdfjam__.

## Como instalar

O __pdfjam__ vem junto com o pacote texlive-extra-utils.

{% highlight shell %}
sudo apt install texlive texlive-latex-extra texlive-extra-utils
{% endhighlight %}

## Como usar

Caso queiramos converter um PDF para A5, podemos exucar o seguinte comando.

{% highlight shell %}
pdfjam --outfile out.pdf --papersize '{148.5mm,210mm}' in.pdf
{% endhighlight %}