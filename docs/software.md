# Software
Install Cine-Fox in your Pi5.

## Overview

![soft](/software.jpg)

Install Cine Fox on your Pi. After installation, you can use USB network tethering to access the Cine Fox webUI interface on your mobile phone using a browser. 

For Android users, I recommend installing [Android App](/android), which can directly open the WebUI, saving the time of opening the browser and entering the URL.

> [!WARNING]
> The installation process may be a bit troublesome, which requires some patience. In the near future, I will make an `.img` to facilitate direct flashing of cine-fox

## Install Software

### Step1: Prepare cinepi-sdk

1. `unzip` or use software like [Belena Etcher](https://etcher.balena.io/) to flash the [cinepi-sdk-001.zip](https://github.com/cinepi/cinepi-sdk/releases/tag/v0.0.1) directly to a micro-sd card. After plugging in the Raspberry Pi, turn it on and plug in the network cable.
> [!TIP]
> The following commands need to be executed using SSH.
> - On Windows, use `win+R` to enter `cmd` to enter the terminal. enter `ssh pi@cinepi.local` and type `1`.
> - On MacOS, open the `terminal` tool, enter `ssh pi@cinepi.local` and type `1`.

2. run command and make sure it works
```shell 
./run-raw.sh
``` 
3. Since the current cinepi-sdk image is a pre-release version, some functions need to be fixed. [Cine-Fox/cinepi-raw](https://github.com/Cine-Fox/cinepi-raw) is the version I have fixed. You need to **overwrite** it.

```shell
cd cinepi-raw
git remote add cinefox https://github.com/Cine-Fox/cinepi-raw.git
git remote remove origin
git remote rename cinefox origin
git fetch --all
git reset --hard origin/cinepi-sdk-001
cd ~
```
  
4. run command to recompile
```shell 
./compile-raw.sh
```

5. If everything is normal, update `./run-raw.sh`

```shell
sudo nano run-raw.sh

# and modify the command like this:
cinepi-raw --post-process-file ~/post-processing.json -n --mode 2028:1520:12:U --width 1280 --height 720 --lores-width 1280 --lores-height 720
```

6. run cinepi-raw again
```shell
./run-raw.sh
```

### Step2: Install Cine-Fox
1. Open **another** terminal, and download cine-fox 
```shell
wget https://raw.githubusercontent.com/Cine-Fox/cine-fox.github.io/main/docs/public/cine-fox
```

Or you can click [here](https://github.com/Cine-Fox/cine-fox.github.io/raw/main/docs/public/cine-fox) to download manually and send it to your pi

2. run command
```shell 
sudo chmod 777 cine-fox
sudo ./cine-fox
```
> [!TIP]
> if you use without CFE Hat, you should run `sudo ./cine-fox --cfe-hat=false`
3. open your browser and type `<your-pi-ip>:5678/web`
4. After testing all functions, you can add a `service` to automatically start cinepi-raw and cine-fox when the Raspberry Pi is boot. 👇

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

## Without CFE Hat
if you use cine-fox without CFE Hat, you need to mount SSD to /media/RAW manually.
