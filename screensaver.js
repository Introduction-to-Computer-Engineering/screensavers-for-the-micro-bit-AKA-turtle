//screen saver program
//working except can't get the timeout to work with switch
//functions will time out correctly on their own but not when called by switch
//tried many variations including adding 'clearscreen' to case switch

//control
input.onButtonPressed(Button.A, function () { //to trigger screensaver
    isSleeping = true
})
input.onButtonPressed(Button.B, function () { //to wake
    isSleeping = false
})

//gestures
input.onGesture(Gesture.Shake, function () {
    currentSS = 0
})
input.onGesture(Gesture.TiltLeft, function () {
    currentSS = 1
})
input.onGesture(Gesture.TiltRight, function () {
    currentSS = 2
})
input.onGesture(Gesture.LogoUp, function () {
    currentSS = 3
})
input.onGesture(Gesture.LogoDown, function () {
    currentSS = 4
})

//screensaver switch

let isSleeping = false
isSleeping = false
let currentSS = 0

basic.forever(function () {
    while (isSleeping == true) {
        if (isSleeping == true) {
            switch (currentSS) {
                case 0: ss1()
                    break;
                case 1: ss2()
                    break;
                case 2: ss3()
                    break;
                case 3: ss4()
                    break;
                case 4: ss5()
                    break;
            }

        }
    }
    basic.showString("Awake!")
})

//screensaver functions

function ss1() { //creates an alternating wave of sprites
    let wave1: game.LedSprite = null
    let wave2: game.LedSprite = null
    let wave3: game.LedSprite = null
    let wave4: game.LedSprite = null
    let wave5: game.LedSprite = null
    let bounce: number[] = []

    wave1 = game.createSprite(0, 4)
    wave2 = game.createSprite(1, 0)
    wave3 = game.createSprite(2, 4)
    wave4 = game.createSprite(3, 0)
    wave5 = game.createSprite(4, 4)
    wave1.turn(Direction.Right, -90) //orients sprites top to bottom
    wave2.turn(Direction.Right, 90)
    wave3.turn(Direction.Right, -90)
    wave4.turn(Direction.Right, 90)
    wave5.turn(Direction.Right, -90)
    bounce = [10, 30, 80, 120]
    game.startStopwatch()
    while (game.currentTime() < 5000) {
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j <= 4 - 1; j++) {
                wave1.move(1)
                basic.pause(bounce[j])
            }
            wave1.turn(Direction.Right, 180)
            bounce.reverse()
        }
        for (let i = 0; i < 2; i++) {
            for (let l = 0; l <= 4 - 1; l++) {
                wave2.move(1)
                basic.pause(bounce[l])
            }
            wave2.turn(Direction.Right, 180)
            bounce.reverse()
        }
        for (let i = 0; i < 2; i++) {
            for (let n = 0; n <= 4 - 1; n++) {
                wave3.move(1)
                basic.pause(bounce[n])
            }
            wave3.turn(Direction.Right, 180)
            bounce.reverse()
        }
        for (let i = 0; i < 2; i++) {
            for (let p = 0; p <= 4 - 1; p++) {
                wave4.move(1)
                basic.pause(bounce[p])
            }
            wave4.turn(Direction.Right, 180)
            bounce.reverse()
        }
        for (let i = 0; i < 2; i++) {
            for (let r = 0; r <= 4 - 1; r++) {
                wave5.move(1)
                basic.pause(bounce[r])
            }
            wave5.turn(Direction.Right, 180)
            bounce.reverse()
        }
    }
    wave1.delete() //clears the sprites at time out
    wave2.delete()
    wave3.delete()
    wave4.delete()
    wave5.delete()
    basic.clearScreen()
}

function ss2() { //creates randoms pixel plots with random brightness
    let Lumen: number[] = []
    let B = 0
    let x = 0
    let y = 0

    Lumen = [0, 10, 50, 100, 255]
    game.startStopwatch()
    while (game.currentTime() < 5000) {
        B = Lumen[Math.randomRange(0, 4)]
        x = Math.randomRange(0, 4)
        y = Math.randomRange(0, 4)
        led.plotBrightness(x, y, B)
        basic.pause(10)
    }
    basic.clearScreen()
}

function ss3() { //someone let a fly in the house
    let sprite = game.createSprite(1, 1)
    let sprite2 = game.createSprite(1, 1)
    let sprite3 = game.createSprite(1, 1)


    game.startStopwatch()
    while (game.currentTime() < 5000) {

        let angle = Math.randomRange(5, 90)

        sprite.set(LedSpriteProperty.Brightness, 200)
        sprite.move(1)
        sprite.turn(Direction.Right, angle)
        sprite.ifOnEdgeBounce()
        basic.pause(70)

        sprite2.set(LedSpriteProperty.Brightness, 30)//next two sprites create the tail effect
        sprite2.move(1)
        sprite2.turn(Direction.Right, angle)
        sprite2.ifOnEdgeBounce()
        basic.pause(20)

        sprite3.set(LedSpriteProperty.Brightness, 10)
        sprite3.move(1)
        sprite3.turn(Direction.Right, angle)
        sprite3.ifOnEdgeBounce()
        basic.pause(10)
    }
    sprite.delete() //aka clear screen for sprites
    sprite2.delete()
    sprite3.delete()
    basic.clearScreen()
}

function ss4() { //makes firework explosions
    game.startStopwatch()
    while (game.currentTime() < 5000) {

        let Lumen = [0, 10, 50, 100, 255];//brightness array


        let B = Lumen[Math.randomRange(0, 4)]
        let x = Math.randomRange(1, 3) //keeps explosino within inner 3x3 
        let y = Math.randomRange(1, 3)
        for (let rotate = 0; rotate < 3; rotate++) { //sets the explosion length
            let delay = rotate + 1 * 10 //increases delay with each loop
            led.plotBrightness(x, y, B)
            basic.pause(20)
            led.plotBrightness(x, y, 0)
            basic.pause(15)

            led.plotBrightness(x + rotate, y, B)
            led.plotBrightness(x - rotate, y, B)
            led.plotBrightness(x, y + rotate, B)
            led.plotBrightness(x, y - rotate, B)
            basic.pause(delay * 3)
            led.plotBrightness(x + rotate, y, 0)
            led.plotBrightness(x - rotate, y, 0)
            led.plotBrightness(x, y + rotate, 0)
            led.plotBrightness(x, y - rotate, 0)
            basic.pause(delay * 5)
        }
    }
    basic.clearScreen()
}

function ss5() { //creates horizontal lines of random brightness
    game.startStopwatch()
    while (game.currentTime() < 5000) {
        let Lumens = [0, 10, 30, 80, 255]; //brightness array
        for (let y = 0; y < 5; y++) {
            let B = Lumens[Math.randomRange(0, 4)] //picks random element of 5 brightness levels
            basic.pause(50) //verticle animation

            for (let x = 0; x < 5; x++) {
                basic.pause(30) //gives horizontal animation
                led.plotBrightness(x, y, B)
            }
        }
    }
    basic.clearScreen()
}
