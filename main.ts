pins.setPull(DigitalPin.P2, PinPullMode.PullNone)
let temp = 0
let strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showColor(neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
    strip.setBrightness(100)
    strip.show()
    basic.pause(500)
})
