# Software
Install Cine-Fox in your Pi5.

## Overview

![soft](/software.jpg)

Install Cine Fox on your Pi. After installation, you can use USB network tethering to access the Cine Fox webUI interface on your mobile phone using a browser. 

For Android users, I recommend installing [Android App](/android), which can achieve more functions.

## Install Cine-Fox
1. Flash [cinepi-sdk](https://github.com/cinepi/cinepi-sdk/releases/tag/v0.0.1) to your micro-sd card
2. run command and make sure it works
```shell 
./run-raw.sh
``` 
3. Since the current cinepi-sdk image is a pre-release version, some functions need to be fixed. [Cine-Fox/cinepi-raw](https://github.com/Cine-Fox/cinepi-raw) is the version I have fixed. You need to **overwrite** it in the `/home/pi/cinepi-raw`.
4. run command to recompile
```shell 
./compile-raw.sh
```
5. Download cine-fox 
```shell
wget https://github.com/Cine-Fox/cine-fox.github.io/raw/main/docs/public/cine-fox
```

Or you can click [here](https://github.com/Cine-Fox/cine-fox.github.io/raw/main/docs/public/cine-fox) to download manually and send it to your pi

6. run command
```shell 
sudo chmod 777 cine-fox
sudo ./cine-fox
```
> [!TIP]
> if you use without CFE Hat, you should run `./cine-fox --cfe-hat=false`
8. open your browser and type `<your-pi-ip>:5678/web`
9. Done!

## Without CFE Hat
if you use cine-fox without CFE Hat, you need to mount SSD to /media/RAW manually.

## Run Cine-Fox when boot
1. Run command 
```shell 
sudo nano /lib/systemd/system/cine-fox.service
```
2. Enter the following
```shell
[Unit]
Description=Cine Fox Service
After=multi-user.target

[Service]
Type=idle
ExecStart=/home/pi/cine-fox
User=root
Group=root
StandardOutput=syslog
StandardError=syslog

[Install]
WantedBy=multi-user.target
```
> [!TIP]
> if you use without CFE Hat, you replace `/home/pi/cine-fox` to `/home/pi/cine-fox --cfe-hat=false`

3. Run command
```shell
sudo chmod 777 /lib/systemd/system/cine-fox.service
sudo systemctl enable cine-fox.service
```
4. Do the same thing with cinepi-raw.service

```shell 
sudo nano /lib/systemd/system/cinepi-raw.service
```

```shell
[Unit]
Description=CinePi Raw Service
After=multi-user.target

[Service]
Type=idle
ExecStart=/home/pi/run-raw.sh
User=pi
StandardOutput=syslog
StandardError=syslog

[Install]
WantedBy=multi-user.target
```

```shell
sudo chmod 777 /lib/systemd/system/cinepi-raw.service
sudo systemctl enable cinepi-raw.service
```
5. reboot

