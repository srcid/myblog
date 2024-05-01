---
title: Montar partição automaticamente com o Systemd-mount
categories: linux systemd systemd-mount
---

Hoje em dia, o init system systemd é unanimidade nas maiorias das distros linux. E não sem razão, pois é realmente uma ferramenta muito poderessa. Uma possibilidade que o systemd nos dá é montar partições útilizando seus arquivos de configuração chamados de units.

## Mount vs. Automount Unit

Ambas as units servem para montar partições, mas as Automount Units auto-montam ou desmontam dependendo se estão em uso. Por isso, há alguns paramentros à mais nessa unit, mas, de resto, o mesmo que vale para uma vale para a outra.

## Nomeação da mount unit

O nome dos arquivos de mount units devem obedeçer à hierarquia do sistema de arquivos. E, existe uma ferramenta do systemd para nos auxiliar nisso. 

{% highlight shell %}
systemd-escape -p --suffix=mount /home/alcides/Documents/on-line
{% endhighlight %}

Desse modo obtemos o nome correto que devemosm salvar a unit `home-alcides-Documents-on\x2dline.mount`

## Mount Unit

Devemos savá-la em `/etc/systemd/system/home-alcides-data.mount`, pois é nela onde se deve salvar os arquivos criados pelo adminstrador do sistema.

{% highlight plaintext %}
[Unit]
Description=Multimedia data mount
Requires=dev-disk-by\x2duuid-2dad8646\x2d5dff\x2d46f9\x2d807b\x2d8c7a3cf1b7be.device
After=dev-disk-by\x2duuid-2dad8646\x2d5dff\x2d46f9\x2d807b\x2d8c7a3cf1b7be.device

[Mount]
What=/dev/disk/by-uuid/2dad8646-5dff-46f9-807b-8c7a3cf1b7be
Where=/home/alcides/data
Type=btrfs
Options=subvol=@data,defaults,compress=zstd:3,noatime,autodefrag

[Install]
RequiredBy=dev-disk-by\x2duuid-2dad8646\x2d5dff\x2d46f9\x2d807b\x2d8c7a3cf1b7be.device
{% endhighlight %}
