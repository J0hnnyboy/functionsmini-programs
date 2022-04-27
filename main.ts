input.onPinPressed(TouchPin.P0, function () {
    game2(sprite, -1)
})
function game2 (sprite: game.LedSprite, num: number) {
    sprite.change(LedSpriteProperty.X, num)
}
function Function1 () {
    basic.showString("Hello!")
    basic.showIcon(IconNames.Happy)
}
function game22 () {
    let num_2 = 0
    sprite.change(LedSpriteProperty.Y, num_2)
}
input.onButtonPressed(Button.A, function () {
    game2(sprite, -1)
})
function spin () {
    for (let index = 0; index < 3; index++) {
        sprite = game.createSprite(1, 1)
        basic.pause(200)
        for (let index = 0; index < 2; index++) {
            sprite.change(LedSpriteProperty.X, 1)
            basic.pause(200)
        }
        for (let index = 0; index < 2; index++) {
            sprite.change(LedSpriteProperty.Y, 1)
            basic.pause(200)
        }
        for (let index = 0; index < 2; index++) {
            sprite.change(LedSpriteProperty.X, -1)
            basic.pause(200)
        }
        for (let index = 0; index < 2; index++) {
            sprite.change(LedSpriteProperty.Y, -1)
            basic.pause(200)
        }
    }
    sprite.delete()
}
input.onButtonPressed(Button.B, function () {
    game2(sprite, 1)
})
input.onPinPressed(TouchPin.P1, function () {
    game2(sprite, 1)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
basic.forever(function () {
	
})
