input.onButtonPressed(Button.A, function () {
    led.plot(1, 1)
    music.playTone(349, music.beat(BeatFraction.Whole))
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 5)
})
input.onButtonPressed(Button.AB, function () {
    music.ringTone(262)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 360)
})
input.onButtonPressed(Button.B, function () {
    led.plot(3, 3)
    music.playTone(196, music.beat(BeatFraction.Whole))
    RingbitCar.running_time(RingbitCar.Direction_run.backward, 3)
})
RingbitCar.init_wheel(AnalogPin.P0, AnalogPin.P1)
basic.forever(function () {
	
})
