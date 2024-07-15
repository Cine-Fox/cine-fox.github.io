# DIY CFE-TypeB Card

CFE-TypeB card cost-effective solution.

## Overview

![card](/card.jpg)

DIY CFE-TypeB card only needs NVMe SSD + Any CFE-TypeB card adapter. My two cards were made in

- JEYI 2280 card adapter + Samsung 970 EVO-Plus 2T 
- ZITAY 2230 card adapter + WD SN740 

They have extremely fast reading and writing speeds.

## How to make it?

<iframe width="560" height="315" src="https://www.youtube.com/embed/7wKL-6GBSw8?si=lHNireKPicTYYE7-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Which size should I choose?

Normally, I recommend the 2230 size, which is easy to carry and will not hinder your shooting when in use. But if you are shooting for a long time and the capacity is large, I recommend the 2280 size. Because the 2230 card is shorter and has less exposed parts, the heat dissipation effect is worse than the 2280 card. When the card temperature is too high, it will slightly affect the CPU usage and writing speed during writing. (But the impact may be small, depending on your cooling measures)

The following are the speeds I tested, it will be affected by the SSD, so it is just for reference: 

- 2230

```shell
pi@cinepi:~ $ ./test_speed_multi /media/RAW
Total data written: 1500 MB
Time taken: 2.05 seconds
Write speed: 730.71 MB/s
User CPU time used: 0.00 seconds
System CPU time used: 0.04 seconds
```

- 2280

```shell
pi@cinepi:~ $ ./test_speed_multi /media/RAW
Total data written: 1500 MB
Time taken: 2.03 seconds
Write speed: 740.12 MB/s
User CPU time used: 0.00 seconds
System CPU time used: 0.04 seconds
```
