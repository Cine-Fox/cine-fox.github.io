# RPI5 CFE Hat

CFexpress PCIe Hat for Raspberry Pi 5

## Overview

![cfe_hat](/cfe.jpg)

[RPI5-CFE-Hat](https://github.com/will127534/RPI5-CFE-Hat) is an OpenSource CFexpress (CFE) PCIe Hat, which is made by [Will Whang](https://github.com/will127534). The following introductions are all from Will's project👇

> Welcome to the GitHub repository for the open-source CFexpress (CFE) PCIe Hat designed specifically for the Raspberry Pi 5. This project aims to enhance the Raspberry Pi 5 by adding the ability to interface with CFexpress Type B cards directly, enabling high-speed data transfer and storage solutions.

I would highly recommend it, it allows you to quickly change storage and reduces the time of transferring to the computer. After you record, you only need to insert the card into the computer and you can edit directly.

## Where can I get it?

This is probably the most important issue for you. Will Whang may occasionally create multiple RPI5-CFE-Hat, but he recommends that users make their own with PCB Plant like JLCPCB and so on, because the key production files are already very complete. 

![pcb](/cfe_pcb.png)

> *This is the preview image when I commissioned JLCPCB to make it. 👆*

## Usage

1. Connect FPC cables with Pi5 and CFE Hat. 
2. Connect the Qwiic to Pi5

![i2c](/cfe_i2c_connect.jpg)

> *Here my FPC cable is connected in reverse, but in order to show the i2c connection, I temporarily blur on the ribbon FPC cable. 👆*

3. Then Cine Fox will help you auto mount it to `/media/RAW`, and you can unmount it on WebUI.
4. Done!

## About FPC Cables

If you want to get the maximum transmission speed, choose ordinary FPC cables and keep them within 3cm. 

You can get more detail from Will's [Blog](https://www.willwhang.dev/Solar-eclipse-2024/#the-challenge-with-fpc-cables) 

## Wiki

[Here](https://github.com/will127534/RPI5-CFE-Hat/wiki) is the wiki made by Will
