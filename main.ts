input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 50; index++) {
        basic.showNumber(index)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 4; index++) {
        basic.showNumber(50 - index)
    }
})
