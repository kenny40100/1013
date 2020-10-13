def on_forever():
    for index in range(5):
        for _2 in range(5):
            led.plot(_2, index)
            basic.pause(100)
    basic.clear_screen()
basic.forever(on_forever)
