radio.onReceivedString(function (receivedString) {
    if ("youre infected" == receivedString) {
        while (true) {
            basic.showIcon(IconNames.Ghost)
            radio.setTransmitPower(0.05)
            radio.sendString(receivedString)
            control.waitMicros(1000)
        }
    }
})
let Infected = 0
if (randint(0, 5) == randint(0, 5)) {
    basic.showIcon(IconNames.Ghost)
    Infected = 1
} else {
    Infected = 0
}
radio.setGroup(0)
radio.setTransmitPower(0.05)
basic.forever(function () {
    if (Infected == 1) {
        basic.showIcon(IconNames.Ghost)
        radio.sendString("youre infected")
        control.waitMicros(4000)
    } else {
        basic.showIcon(IconNames.Heart)
        radio.setGroup(1)
        radio.setTransmitPower(4)
        radio.sendString("im alive")
        radio.setTransmitPower(0.05)
        radio.setGroup(0)
        control.waitMicros(4000)
    }
})
