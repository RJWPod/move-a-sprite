input.onButtonPressed(Button.A, function () {
    Sprite.move(-1)
})
input.onGesture(Gesture.LogoUp, function () {
    Sprite.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.AB, function () {
    Sprite.set(LedSpriteProperty.X, 2)
    Sprite.set(LedSpriteProperty.Y, 2)
})
input.onButtonPressed(Button.B, function () {
    Sprite.move(1)
})
input.onGesture(Gesture.LogoDown, function () {
    Sprite.change(LedSpriteProperty.Y, -1)
})
let Sprite: game.LedSprite = null
Sprite = game.createSprite(2, 2)
