# StarlightEye

OpenSource IMX585 Camera Board for Raspberry Pi

## Overview

![Pic](/imx585.jpg)

[StarlightEye](https://github.com/will127534/StarlightEye) is an OpenSource IMX585 Camera Board, which is made by [Will Whang](https://github.com/will127534). The following introductions are all from Will's project👇

> Welcome to the StarlightEye project, an open-source camera board designed for Raspberry Pi Compute Module 4 boards using the IMX585. This project aims to provide a high-quality, affordable, and accessible camera module for advanced Raspberry Pi projects. The board is designed using KiCad v6, a popular open-source electronics design automation (EDA) software.
> 
> StarlightEye captures stunning high-resolution images and videos with improved low-light performance and dynamic range. It's perfect for photography enthusiasts, developers, and makers who want to level up their Raspberry Pi projects with a powerful camera.

## Where can I get it?

This is probably the most important issue for you. Will Whang may occasionally create multiple StarlightEyes, but he recommends that users make their own with PCB Plant like JLCPCB and so on, because the key production files are already very complete. 

![pcb](/imx585_pcb.jpg)

> *This is the preview image when I commissioned JLCPCB to make it. 👆*

## Usage

### Step 1: Modify dtoverlay
you will need to modify the `config.txt` found in the boot partition after you are flashing your [cinepi-sdk](/software.html#install-cine-fox).

```shell
# StarlightEye Module ( default camera port 1 )
camera_auto_detect=0
dtoverlay=imx585
```

### Step 2: Recompile driver
Initially, the default imx585 driver of current pre-release **cinepi-sdk** is not made for StarlightEye, so the i2c address needs to be changed and recompiled. 

You can use the following way to complete it 👇

```shell
cd ~/driver/imx585-v4l2-driver/
git pull
git checkout kernel_6.1
./setup.sh
```
Done!

## Wiki

[Here](https://github.com/will127534/StarlightEye/wiki) is the wiki made by Will
