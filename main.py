temp = 0

def on_forever():
    global temp
    temp = input.temperature()
    led.plot_bar_graph(temp, 50, True)
    if input.button_is_pressed(Button.A):
        basic.show_number(temp)
basic.forever(on_forever)
