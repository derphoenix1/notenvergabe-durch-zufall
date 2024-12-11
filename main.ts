let schulnote = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    schulnote = randint(1, 6)
    basic.showNumber(schulnote)
    if (schulnote == 1) {
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
    if (schulnote == 2) {
        music.playTone(494, music.beat(BeatFraction.Whole))
    }
    if (schulnote == 3) {
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
    if (schulnote == 4) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
    if (schulnote == 5) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    }
    if (schulnote == 6) {
        music.playTone(131, music.beat(BeatFraction.Whole))
    }
})
