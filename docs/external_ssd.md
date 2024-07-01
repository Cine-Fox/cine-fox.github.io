# External SSD

Use External SSD with USB 3.0 in Pi5

## Overview

![ssd](/external_ssd.png)

External SSD is also a common storage way, like Samsung T5, T7. It can be easily removed and plugged into a computer to edit your files. However, after [Csaba Nagy](https://github.com/schoolpost) test, the read and write speed of USB3.0 is limited on Pi5. Here are his original words in Discord:

> In general I would recommend the CFE HAT if you want to do above 30p or the 16-bit mode ( which is limited to 25p ) as those can easily exceed 400MB/s +

Therefore, if it is not used for high FPS and high-quality shooting, then External SSD can meet the requirements. Otherwise, [RPI5-CFE-Hat](/cfehat) is still recommended.

## Usage

1. Flash image, you can do [this step](/software.html#install-cine-fox) first.
2. Run command
```shell
git clone https://github.com/cinepi/udev-media-automount.git
cd udev-media-automount
sudo make install
sudo udevadm control --reload-rules
sudo udevadm trigger
sudo reboot
```

Now it can auto mount your SSD now.