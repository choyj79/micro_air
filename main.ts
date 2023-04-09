pins.analogWritePin(AnalogPin.P3, 0)
basic.forever(function () {
    if (0 < pins.analogReadPin(AnalogPin.P2) && pins.analogReadPin(AnalogPin.P2) <= 30) {
        pins.analogWritePin(AnalogPin.P3, 0)
    } else {
        if (30 < pins.analogReadPin(AnalogPin.P2) && pins.analogReadPin(AnalogPin.P2) <= 80) {
            pins.analogWritePin(AnalogPin.P3, 0)
        } else {
            if (80 < pins.analogReadPin(AnalogPin.P2) && pins.analogReadPin(AnalogPin.P2) <= 130) {
                pins.analogWritePin(AnalogPin.P3, 150)
            } else {
                if (130 < pins.analogReadPin(AnalogPin.P2) && pins.analogReadPin(AnalogPin.P2) <= 160) {
                    pins.analogWritePin(AnalogPin.P3, 450)
                } else {
                    if (160 < pins.analogReadPin(AnalogPin.P2) && pins.analogReadPin(AnalogPin.P2) <= 600) {
                        pins.analogWritePin(AnalogPin.P3, 700)
                    }
                }
            }
        }
    }
})
