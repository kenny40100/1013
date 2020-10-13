let _ = 0
basic.forever(function () {
    _ = input.compassHeading()
    if (_ <= 22.5) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (_ <= 112.5) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (_ <= 202.5) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (_ <= 292.5) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (_ <= 67.5) {
        basic.showLeds(`
            # # # # #
            # # . . .
            # . # . .
            # . . # .
            # . . . #
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (_ <= 157.5) {
        basic.showLeds(`
            # . . . #
            # . . # .
            # . # . .
            # # . . .
            # # # # #
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (_ <= 247.5) {
        basic.showLeds(`
            # . . . #
            . # . . #
            . . # . #
            . . . # #
            # # # # #
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (_ <= 337.5) {
        basic.showLeds(`
            # # # # #
            . . . # #
            . . # . #
            . # . . #
            # . . . #
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    }
})
