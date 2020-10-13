basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        for (let _ = 0; _ <= 4; _++) {
            led.plot(_, index)
            basic.pause(100)
        }
    }
    basic.clearScreen()
})
