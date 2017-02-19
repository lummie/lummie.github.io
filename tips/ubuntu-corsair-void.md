I recently hit an issue after a brand new install of Ubuntu 16.10 where I'd be using unity and suddenly at random intervals the left mouse button would stop working and windows would not focus. A ctrl-alt-f1 then ctrl-alt-f7 would get things working again, but this was far from ideal.
It turns out there is some issue with my new [Corsair Void RGB Wireless Gaming Headset](http://www.corsair.com/en-gb/void-wireless-dolby-7-1-gaming-headset)

After a bit of searching I spotted a similar issue but with differnet hardware so this is how it was fixed for the above, specifically model **RDA0003**

create / edit `/etc/modprobe.d/usbhid.conf` and add/modify this line

`
options usbhid quirks=0x1b1c:0x0a2b:0x0004
`

**0x1b1c** is the manufacturer and **0x0a2b** is the product id. The product id might be different for your headset if it is wired for example.  
You can find the product id by looking at the output of lsusb for the specific vendor.

```
$ lsusb -v -d 0x1b1c:

Bus 003 Device 002: ID 1b1c:0a2b Corsair 
Couldn't open device, some information will be missing
Device Descriptor:
  bLength                18
  bDescriptorType         1
  bcdUSB               1.10
  bDeviceClass            0 (Defined at Interface level)
  bDeviceSubClass         0 
  bDeviceProtocol         0 
  bMaxPacketSize0        64
  idVendor           0x1b1c Corsair
  idProduct          0x0a2b 
  bcdDevice            0.00
  iManufacturer           3 
  iProduct                4 
  iSerial                 0 
  bNumConfigurations      1
  Configuration Descriptor:
    bLength                 9
    bDescriptorType         2
    wTotalLength          269
    bNumInterfaces          4
    bConfigurationValue     1
    iConfiguration          0 
    bmAttributes         0x80
      (Bus Powered)
    MaxPower              100mA
    Interface Descriptor:
      bLength                 9
...
```
