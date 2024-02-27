let temp = 0
basic.forever(function () {
    temp = input.temperature()
    led.plotBarGraph(
    temp,
    50,
    true
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(temp)
    }
})
