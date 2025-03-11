radio.onReceivedString(function (receivedString) {
    if (true) {
        if ("im alive" == receivedString) {
            basic.showIcon(IconNames.Heart)
        } else {
            basic.showIcon(IconNames.Ghost)
        }
    } else if ("youre infected" == receivedString) {
        radio.setTransmitPower(0.05)
        while (true) {
            basic.showIcon(IconNames.Ghost)
            radio.sendString(receivedString)
            control.waitMicros(1000)
        }
    } else {
    	
    }
})
let Infected = 0
if (randint(0, 5) == randint(0, 5)) {
    basic.showIcon(IconNames.Ghost)
    Infected = 1
} else {
    Infected = 0
}
radio.setTransmitPower(0.05)
basic.forever(function () {
    if (Infected == 1) {
        basic.showIcon(IconNames.Ghost)
        radio.sendString("youre infected")
        control.waitMicros(4000)
    } else {
        basic.showIcon(IconNames.Heart)
        radio.setTransmitPower(2)
        radio.sendString("im alive")
        radio.setTransmitPower(0.05)
        control.waitMicros(4000)
    }
})
