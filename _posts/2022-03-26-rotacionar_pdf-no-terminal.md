---
title: "Rotacionar PDF pelo terminal"
data: 2022-03-26 12:18:57 -0300
categories: pdf terminal
---

Muitos PDF que baixamos da internet precisam ser rotacionados.

## Usando o pdftk

### Para rotacionar a 1ª página 90° para a direita

{% highlight shell %}
pdftk file.pdf cat 1right output file_rotated.pdf
{% endhighlight %}

### Para rotacionar todas as páginas 90° para a esquerda

{% highlight shell %}
pdftk sample.pdf cat 1-endleft output sample_rotated.pdf
{% endhighlight %}