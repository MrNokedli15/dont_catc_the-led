input.onButtonPressed(Button.A, function () {
    ember.move(-1)
    game.addScore(1)
})
input.onButtonPressed(Button.B, function () {
    ember.move(1)
    game.addScore(1)
})
let ember: game.LedSprite = null
game.setScore(0)
ember = game.createSprite(2, 4)
let fal = game.createSprite(randint(0, 4), 0)
let sprite = game.createSprite(randint(0, 4), 0)
fal.turn(Direction.Right, 90)
sprite.turn(Direction.Right, 90)
basic.pause(1000)
basic.forever(function () {
    fal.move(1)
    sprite.move(1)
    basic.pause(250)
    if (sprite.isTouchingEdge()) {
        fal.delete()
        fal = game.createSprite(randint(0, 4), 0)
        fal.turn(Direction.Right, 90)
    }
    if (sprite.isTouchingEdge()) {
        sprite.delete()
        sprite = game.createSprite(randint(0, 4), 0)
        sprite.turn(Direction.Right, 90)
    }
})
basic.forever(function () {
    if (fal.isTouching(ember)) {
        game.gameOver()
    }
    if (sprite.isTouching(ember)) {
        game.gameOver()
    }
})
