# Power Management

Power Management for SBC's

## Overview

![power](/power.jpg)

Because with the upgrade of Pi5, Pi official also recommends 5V5A power supply for Pi5, but most specifications of power on the market are 5V3A, which cannot reach 5A. This may make PCIE and USB peripherals to not have enough power, so we need to use power management.

There are generally two ways: 
- Power Management Hat
- DC-DC converter

I have used both ways, and I personally prefer Hat's way.

## Recommend

Here I list some hardware I have used. You can also use different ones yourself. You just need to pay attention to the input voltage and output voltage and current.

### Power Management Hat

- Geekworm X735 V3.0 & Momentary switch  💴[Buy](https://geekworm.com/collections/nas-storage/products/raspberry-pi-x735-safe-shutdown-auto-cooling-expansion-board) 📕[Wiki](https://wiki.geekworm.com/X735) (⭐Recommend)
- 52Pi EP-0104 💴[Buy](https://www.amazon.com/GeeekPi-Raspberry-DockerPi-Shutdown-Expansion/dp/B07TC31Y92/ref=sr_1_1?crid=3BH7E288EQF2T&dib=eyJ2IjoiMSJ9.w1rSmfir75dtcff-mcZGKg.yyfrdIMeTey91KaF5MaiwC1iXdwqiXFQGO8RvpR6M6A&dib_tag=se&keywords=dockerpi+power&qid=1715139745&sprefix=dockerpi+power%2Caps%2C337&sr=8-1) 📕[Wiki](https://wiki.52pi.com/index.php/EP-0104)

### DC-DC converter
- dc-dc converter 💴[Buy](https://spotpear.com/index.php/index/product/detail/id/1472.html)

## About Battery

There are many options for batteries. You just need to make sure that the voltage and capacity are sufficient. I recommend V-mount batteries like SmallRig VB50 💴[Buy](https://www.smallrig.com/SmallRig-VB50-mini-V-Mount-Battery-3579.html).