radio.onReceivedNumber(function (receivedNumber) {
    GameOver = true
    radio.sendNumber(SelectedNumber)
    if (receivedNumber == SelectedNumber) {
        // Draw / Remiza
        Result = 0
    } else {
        if (receivedNumber == (SelectedNumber + 1) % 3) {
            // Defeat / Prohra
            Result = -1
        } else {
            // Victory / Vyhra
            Result = 1
        }
    }
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.A, function () {
    if (isReady) {
        isReady = false
    } else {
        isReady = true
    }
})
input.onButtonPressed(Button.B, function () {
    if (isReady) {
        radio.sendNumber(SelectedNumber)
    } else {
        SelectedNumber += 1
        SelectedNumber = SelectedNumber % 3
    }
})
let GameOver = false
let Result = 0
let SelectedNumber = 0
let isReady = false
radio.setGroup(1)
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
isReady = false
SelectedNumber = 0
Result = 0
basic.forever(function () {
    if (!(GameOver)) {
        if (isReady) {
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showNumber(SelectedNumber)
        }
    } else {
        if (Result == 0) {
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 1)
        } else if (Result == -1) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 0)
        } else {
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P2, 0)
        }
    }
})
