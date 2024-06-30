# Android App
use Cine-Fox in your Android phone

## How to use
1. `sudo apt install dhcpcd`
2. `sudo nano /etc/dhcpcd.conf`
3. add these lines
```
interface usb0
static ip_address=192.168.42.42/24
static routers=192.168.42.129
static domain_name_servers=192.168.42.129
```
4. `sudo systemctl restart dhcpcd`
5. install apk [download](https://github.com/Cine-Fox/Cine-Fox/releases)
6. connect to pi and enable usb tethering
7. launch App
