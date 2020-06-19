basic.forever(function () {
    basic.pause(100)
})
control.inBackground(function () {
    while (true) {
        led.toggle(0, 0)
        basic.pause(1000)
    }
})
control.inBackground(function () {
    while (true) {
        led.toggle(0, 1)
        basic.pause(500)
    }
})
control.inBackground(function () {
    while (true) {
        led.toggle(0, 2)
        basic.pause(250)
    }
})
