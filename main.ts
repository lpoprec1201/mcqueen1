music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 5) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.M1)
        basic.pause(1000)
    }
})
