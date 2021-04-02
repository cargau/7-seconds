input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Chessboard)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # . .
        # . . # .
        # . . # .
        # . . # .
        . # # . .
        `)
})
