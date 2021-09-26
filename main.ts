let game_selecter = 0
let dice = 0
let coin_flip = 0
let RPS = 0
input.onButtonPressed(Button.A, function () {
    game_selecter = 1
})
input.onButtonPressed(Button.AB, function () {
    game_selecter = 3
})
input.onButtonPressed(Button.B, function () {
    game_selecter = 2
})
input.onGesture(Gesture.Shake, function () {
    if (game_selecter == 1) {
        basic.showLeds(`
            # # . . .
            . . . . .
            . . # . .
            . . # . .
            . . . . #
            `)
        basic.showLeds(`
            . . . # #
            . . . . .
            . . # . .
            . . # . .
            # # . . .
            `)
        dice = randint(1, 6)
        if (dice == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
        if (dice == 2) {
            basic.showLeds(`
                . . . . .
                . # . . .
                . . . . .
                . . . # .
                . . . . .
                `)
        }
        if (dice == 3) {
            basic.showLeds(`
                . . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . .
                `)
        }
        if (dice == 4) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                . . . . .
                `)
        }
        if (dice == 5) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
        }
        if (dice == 6) {
            basic.showLeds(`
                # . . . #
                . . . . .
                # . . . #
                . . . . .
                # . . . #
                `)
        }
    }
    if (game_selecter == 2) {
        basic.pause(200)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        coin_flip = randint(0, 1)
        if (coin_flip == 0) {
            basic.showString("T")
        }
        if (coin_flip == 1) {
            basic.showString("H")
        }
    }
    if (game_selecter == 3) {
        RPS = randint(1, 3)
        if (RPS == 1) {
            basic.showLeds(`
                . . # # .
                . # # # .
                # # # # #
                # # # # #
                # # # # #
                `)
        }
        if (RPS == 2) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
        if (RPS == 3) {
            basic.showLeds(`
                . . . . #
                # # . # .
                # . # . .
                # # . # .
                . . . . #
                `)
        }
    }
})
