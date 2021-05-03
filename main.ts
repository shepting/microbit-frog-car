input.onButtonPressed(Button.A, function () {
    led.plot(1, 1)
    music.playTone(349, music.beat(BeatFraction.Whole))
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 5)
})
input.onSound(DetectedSound.Loud, function () {
    lightsOn = !(lightsOn)
    if (lightsOn) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # . # #
            # # # # #
            . # # # .
            `)
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(330, music.beat(BeatFraction.Double))
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 360)
})
radio.onReceivedString(function (receivedString) {
    music.playTone(262, music.beat(BeatFraction.Eighth))
    basic.showString("")
    if (receivedString == "D") {
        RingbitCar.running_time(RingbitCar.Direction_run.forward, 1)
    }
    if (receivedString == "E") {
        RingbitCar.running_time(RingbitCar.Direction_run.backward, 1)
    }
    if (receivedString == "F") {
        RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 90)
    }
    if (receivedString == "C") {
        RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 90)
    }
})
input.onButtonPressed(Button.B, function () {
    led.plot(3, 3)
    music.playTone(196, music.beat(BeatFraction.Whole))
    RingbitCar.running_time(RingbitCar.Direction_run.backward, 3)
})
let lightsOn = false
radio.setGroup(148)
RingbitCar.init_wheel(AnalogPin.P0, AnalogPin.P1)
basic.forever(function () {
	
})
