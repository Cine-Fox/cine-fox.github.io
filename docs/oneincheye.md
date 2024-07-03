# OneInchEye

OpenSource IMX283 Camera Board for Raspberry Pi

## Overview

![pcb](/imx283.png)

[OneInchEye](https://github.com/will127534/OneInchEye) is an OpenSource IMX283 Camera Board, which is made by [Will Whang](https://github.com/will127534). The following introductions are all from Will's project👇

> Welcome to the OneInchEye project, an open-source camera board designed for Raspberry Pi Compute Module 4 boards using the IMX283 one-inch sensor. This project aims to provide a high-quality, affordable, and accessible camera module for advanced Raspberry Pi projects. The board is designed using KiCad v6, a popular open-source electronics design automation (EDA) software.
> 
> OneInchEye captures stunning high-resolution images and videos with improved low-light performance and dynamic range. It's perfect for photography enthusiasts, developers, and makers who want to level up their Raspberry Pi projects with a powerful camera. The board also features a TMP117 temperature sensor for accurate temperature readings.
> 
> Please note that the OneInchEye is not compatible with most Raspberry Pi boards because it requires 22-pin FPC connector with 4-lane MIPI-CSI interface. Ensure compatibility with your specific board before proceeding.

But Will said [StarlightEye](/starlighteye) is more suitable for video cropping, so I never test OneInchEye. 

## Where can I get it?

This is probably the most important issue for you. Will Whang may occasionally create multiple OneInchEyes, but he recommends that users make their own with PCB Plant like JLCPCB and so on, because the key production files are already very complete. 

## Usage

### Modify dtoverlay

you will need to modify the `config.txt` found in the boot partition after you are flashing your [cinepi-sdk](/software.html#install-cine-fox).

```shell
# OneInchEye Module ( default camera port 1 )
camera_auto_detect=0
dtoverlay=imx283
```

## Wiki

[Here](https://github.com/will127534/OneInchEye/wiki) is the wiki made by Will
