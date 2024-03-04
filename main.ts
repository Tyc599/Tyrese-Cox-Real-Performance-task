controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (a > 0) {
        P2_Move_History.push("B")
        if (P2_Move_History.length > 5) {
            P2_Move_History.shift()
        }
    }
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (a > 0) {
        P1_Sprite.setVelocity(0, -80)
        pause(500)
        P1_Sprite.setVelocity(0, 50)
        P1_move_history.push("Up")
        if (P1_move_history.length > 5) {
            P1_move_history.shift()
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (a > 0) {
        P2_Move_History.push("A")
        if (P2_Move_History.length > 5) {
            P2_Move_History.shift()
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    if (a > 0) {
        P2_Move_History.push("Down")
        if (P2_Move_History.length > 5) {
            P2_Move_History.shift()
        }
    }
})
function Proof_of_concept (input_list: any[], Combo_list: any[]) {
    if (input_list.length >= 5) {
        input_index = input_list.length - 1
        combo_index = 0
        for (let index = 0; index < Combo_list.length; index++) {
            if (input_list[combo_index] != Combo_list[combo_index]) {
                return false
            }
            input_index += -1
            combo_index += 1
        }
        return true
    }
    return false
}
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (a > 0) {
        P2_Move_History.push("Up")
        if (P2_Move_History.length > 5) {
            P2_Move_History.shift()
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (a > 0) {
        P2_Move_History.push("Right")
        if (P2_Move_History.length > 5) {
            P2_Move_History.shift()
        }
    }
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Repeated, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . 1 1 1 1 3 1 1 1 1 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, P1_Sprite, 250, 0)
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    if (a > 0) {
        P1_move_history.push("Left")
        if (P1_move_history.length > 5) {
            P1_move_history.shift()
        }
    }
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (a > 0) {
        P1_move_history.push("Right")
        if (P1_move_history.length > 5) {
            P1_move_history.shift()
        }
    }
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (a > 0) {
        P1_move_history.push("A")
        if (P1_move_history.length > 5) {
            P1_move_history.shift()
        }
    }
})
function startgame () {
    P2_Sprite = sprites.create(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f f f f f e e e e f . . . . 
        . . . . f f e e e e e e f . f f 
        . . . f e e f e e f e e f . e f 
        . . f e e f e e f e e e f . e f 
        . f b d f d b f b b f e f f e f 
        . f d d f d d f d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `, SpriteKind.Player)
    P1_Sprite = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Player)
    a += 1
    Combo_store = [
    "B",
    "B",
    "A",
    "B",
    "A"
    ]
    Current_Screen = 1
    P1_move_history = []
    P2_Move_History = []
    scene.setBackgroundImage(assets.image`Title Screen`)
    tiles.setCurrentTilemap(tilemap`level1`)
    P1_Sprite.setStayInScreen(true)
    P2_Sprite.setStayInScreen(true)
    if (game.ask("A=monkey B=Ghost")) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        P1_Sprite = sprites.create(img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e f c . . . . 
            . f d d d d e e e f f . . . . . 
            . . f f f f f e e e e f . . . . 
            . . . . f f e e e e e e f . f f 
            . . . f e e f e e f e e f . e f 
            . . f e e f e e f e e e f . e f 
            . f b d f d b f b b f e f f e f 
            . f d d f d d f d d b e f f f f 
            . . f f f f f f f f f f f f f . 
            `, SpriteKind.Player)
        P2_Sprite = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Player)
    } else {
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        P2_Sprite = sprites.create(img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e f c . . . . 
            . f d d d d e e e f f . . . . . 
            . . f f f f f e e e e f . . . . 
            . . . . f f e e e e e e f . f f 
            . . . f e e f e e f e e f . e f 
            . . f e e f e e f e e e f . e f 
            . f b d f d b f b b f e f f e f 
            . f d d f d d f d d b e f f f f 
            . . f f f f f f f f f f f f f . 
            `, SpriteKind.Player)
        P1_Sprite = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Player)
    }
    controller.player1.moveSprite(P1_Sprite, 100, 0)
    controller.player2.moveSprite(P2_Sprite, 100, 0)
    P1_Sprite.setVelocity(0, 50)
    P2_Sprite.setVelocity(0, 50)
}
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    P1_move_history.push("B")
    if (P1_move_history.length > 5) {
        P1_move_history.shift()
    }
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . 2 2 1 1 1 1 2 . . 
        . . . . 2 2 3 3 1 1 1 1 1 1 . . 
        . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
        . . . . . . 2 2 3 1 1 1 1 2 . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, P1_Sprite, 250, 0)
    if (Proof_of_concept(P1_move_history, Combo_store)) {
    	
    }
})
function startmenu () {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffff9dd66cccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9dd66cccffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffd9db6188888ccefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd9db6188888ccefffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffbd66d68688ccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbd66d68688ccccccffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffdb96666888ccebcccbc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdb96666888ccebcccbc9ffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffb96966688bb888c888ccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb96966688bb888c888ccffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffbbb666688888bbb8888c869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbb666688888bbb8888c869ffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffd9966668888ddbbdbccbbc8bfffffffffffffffffffffffffffffffffffffffffffffffffffffffd9966668888ddbbdbccbbc8bffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff9966666688bdbdbbbbcc8bc89ffffffffffffffffffffffffffffffffffffffffffffffffffffff9966666688bdbdbbbbcc8bc89fffffffffffffffffffffffffffffffffffff
        ffffffffffffffffff9969666d86bddbbbbbbbcc8cc6fffffffffffffffffffffffffffffffffffffffffffffffffffff9969666d86bddbbbbbbbcc8cc6fffffffffffffffffffffffffffffffffffff
        ffffffffffffffffff996d966688bdbbbbbbbbccc8b89ffffffffffffffffffffffffffffffffffffffffffffffffffff996d966688bdbbbbbbbbccc8b89ffffffffffffffffffffffffffffffffffff
        fffffffffffffffff9996dd96888bbbbbbbbbbcccc886fffffffffffffffffffffffffffffffffffffffffffffffffff9996dd96888bbbbbbbbbbcccc886ffffffffffffffffffffffffffffffffffff
        fffffffffffffffff9b9666668868bbbbbbbbbccccc88fffffffffffffffffffffffffffffffffffffffffffffffffff9b9666668868bbbbbbbbbccccc88ffffffffffffffffffffffffffffffffffff
        fffffffffffffffff9bbe6666688888888bbbccccc888fffffffffffffffffffffffffffffffffffffffffffffffffff9bbe6666688888888bbbccccc888ffffffffffffffffffffffffffffffffffff
        fffffffffffffffffbbbb696688888d8bdbbbcccce888fffffffffffffffffffffffffffffffffffffffffffffffffffbbbb696688888d8bdbbbcccce888ffffffffffffffffffffffffffffffffffff
        fffffffffffffffffbbcccc66886888ddb8bbbccc888bfffffffffffffffffffffffffffffffffffffffffffffffffffbbcccc66886888ddb8bbbccc888bffffffffffffffffffffffffffffffffffff
        fffffffffffffffffdbbbccb66888888888bbcccc8888fffffffffffffffffffffffffffffffffffffffffffffffffffdbbbccb66888888888bbcccc8888ffffffffffffffffffffffffffffffffffff
        fffffffffffffffffbbbccc666888888888bbcccc8888fffffffffffffffffffffffffffffffffffffffffffffffffffbbbccc666888888888bbcccc8888ffffffffffffffffffffffffffffffffffff
        fffffffffffffffff9dbccc668888888888bbccc88c86fffffffffffffffffffffffffffffffffffffffffffffffffff9dbccc668888888888bbccc88c86ffffffffffffffffffffffffffffffffffff
        fffffffffffffffff99bbcc666886888888bbcc88b886fffffffffffffffffffffffffffffffffffffffffffffffffff99bbcc666886888888bbcc88b886ffffffffffffffffffffffffffffffffffff
        ffffffffffffffffff6bbc996b8888888888bcc88c86fffffffffffffffffffffffffffffffffffffffffffffffffffff6bbc996b8888888888bcc88c86fffffffffffffffffffffffffffffffffffff
        ffffffffffffffffff99bc666bd888888888ccc88889fffffffffffffffffffffffffffffffffffffffffffffffffffff99bc666bd888888888ccc88889fffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff6cc6966bb88888888bc8888bfffffffffffffffffffffffffffffffffffffffffffffffffffffff6cc6966bb88888888bc8888bffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff9b96666b888888888888889ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9b96666b888888888888889ffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffff9c669d68868888888b889ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9c669d68868888888b889fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff6666d68688888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666d68688888888869ffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffff6996668888888886fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6996668888888886ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffff6968888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6968888888869fffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffff9111111669fffffffffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffff9111111669fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffff111ffffffffffffffffffffffffff111111111fffffffffffff11111111111ffffffff111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff11111fffffffffffffffffffffff1111111111111fffffffff1111fffffff111fffffff111111111111111111ffffffffffffff111fffffffffffffffffffffffffffffffffffffffff
        fffffffffffff11111ffffffff111fffffffffff111111111111111ffffffff1111fffffff111fffffff111111111111111111fffffffffff111111ffffffffff111ffffffffffffffffffffffffffff
        fffffffffffff11111fffffff1111ffffffffff11111fffffff11111fffffff1111fffffff111ffffffffffffff111ffffffffffffffffff1111111ffffffffff111ffffffffffffffffffffffffffff
        ffffffffffff1111111ffffff1111ffffffffff111fffffffffff111fffffff1111fffffff111ffffffffffffff111ffffffffffffffffff1111111ffffffffff111ffffffffffffffffffffffffffff
        ffffffffffff1111111ffffff11111ffffffff1111fffffffffff1111ffffff1111fffffff111ffffffffffffff111fffffffffffffffff1111f1111fffffffff111ffffffffffffffffffffffffffff
        fffffffffff1111f111fffff111111ffffffff111fffffffffffff111ffffff1111fffffff111ffffffffffffff111fffffffffffffffff1111f1111fffffffff111ffffffffffffffffffffffffffff
        fffffffffff1111f1111ffff111111ffffffff111fffffffffffff111ffffff1111fffffff111ffffffffffffff111ffffffffffffffff1111fff111fffffffff111ffffffffffffffffffffffffffff
        fffffffffff111ff1111fff11111111fffffff111fffffffffffff111ffffff1111111111111fffffffffffffff111ffffffffffffffff1111fff1111ffffffff111ffffffffffffffffffffffffffff
        ffffffffff1111fff1111ff11111111fffffff111fffffffffffff111ffffff11f111111111ffffffffffffffff111ffffffffffffffff111ffff1111ffffffff111ffffffffffffffffffffffffffff
        ffffffffff1111fff1111ff111ff1111ffffff111fffffffffffff111ffffff11ff111111111fffffffffffffff111fffffffffffffff111111111111ffffffff111ffffffffffffffffffffffffffff
        fffffffff1111fffff111f1111ff1111ffffff111fffffffffffff111ffffff11fffffffff11fffffffffffffff111fffffffffffffff111111111111ffffffff111ffffffffffffffffffffffffffff
        fffffffff1111fffff11111111fff111ffffff111fffffffffffff111ffffff11ffffffffff11ffffffffffffff111ffffffffffffff11111111111111fffffff111ffffffffffffffffffffffffffff
        fffffffff111ffffff1111111ffff1111fffff1111fffffffffff1111ffffff11fffffffffff11fffffffffffff111ffffffffffffff1111ffffff1111fffffff111ffffffffffffffffffffffffffff
        ffffffff1111fffffff111111ffff1111ffffff111fffffffffff111fffffff11fffffffffff11fffffffffffff111fffffffffffff1111ffffffff111fffffff111ffffffffffffffffffffffffffff
        ffffffff1111fffffff11111ffffff1111fffff11111fffffff11111fffffff11ffffffffffff11ffffffffffff111fffffffffffff1111ffffffff1111ffffff1111111111111ffffffffffffffffff
        fffffff1111ffffffff11111ffffff1111ffffff111111111111111ffffffff11fffffffffffff11fffffffffff111fffffffffffff111fffffffff1111ffffff1111111111111ffffffffffffffffff
        fffffff1111fffffffff1111fffffff111fffffff1111111111111fffffffff11ffffffffffffffffffffffffffffffffffffffffff111ffffffffff111ffffff1111111111111ffffffffffffffffff
        fffffff111fffffffffffffffffffffffffffffffff111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff111ffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff111ffffffff111fffffffff111111111ffffffffffffff11111ffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff111ffffff11111fffffff1111111111111ffffffffffff11111ffffffff111fffffffff111fffff1ffffffffffffff111fffff111111111111111111fffffffffffffffffffffffffff
        fffffffffffff111ffff1111111ffffff111111111111111fffffffffff11111fffffff1111fffffffff111ffffff1ffffffffff111111fffff111111111111111111fffffffffffffffffffffffffff
        fffffffffffff111fff1111111ffffff11111fffffff11111fffffffff1111111ffffff1111fffffffff111ffffff1fffffffff1111111fffff111111111111111111fffffffffffffffffffffffffff
        fffffffffffff111f1111111ffffffff111fffffffffff111fffffffff1111111ffffff11111ffffffff111ffffff1fffffffff1111111ffffffffffff111fffffffffffffffffffffffffffffffffff
        fffffffffffff111111111fffffffff1111fffffffffff1111fffffff1111f111fffff111111ffffffff111ffffff1ffffffff1111f1111fffffffffff111fffffffffffffffffffffffffffffffffff
        fffffffffffff11111111ffffffffff111fffffffffffff111fffffff1111f1111ffff111111ffffffff111ffffff1ffffffff1111f1111fffffffffff111fffffffffffffffffffffffffffffffffff
        fffffffffffff111111ffffffffffff111fffffffffffff111fffffff111ff1111fff11111111fffffff111ffffff1fffffff1111fff111fffffffffff111fffffffffffffffffffffffffffffffffff
        fffffffffffff111111ffffffffffff111fffffffffffff111ffffff1111fff1111ff11111111fffffff111ffffff1fffffff1111fff1111ffffffffff111fffffffffffffffffffffffffffffffffff
        fffffffffffff1111111fffffffffff111fffffffffffff111ffffff1111fff1111ff111ff1111ffffff111fffff1ffffffff111ffff1111ffffffffff111fffffffffffffffffffffffffffffffffff
        fffffffffffff11111111ffffffffff111fffffffffffff111fffff1111fffff111f1111ff1111ffffff111111111fffffff111111111111ffffffffff111fffffffffffffffffffffffffffffffffff
        fffffffffffff111f11111fffffffff111fffffffffffff111fffff1111fffff11111111fff111ffffff111ffffff1ffffff111111111111ffffffffff111fffffffffffffffffffffffffffffffffff
        fffffffffffff111ff111111fffffff111fffffffffffff111fffff111ffffff1111111ffff1111fffff111ffffff1fffff11111111111111fffffffff111fffffffffffffffffffffffffffffffffff
        fffffffffffff111fff111111ffffff1111fffffffffff1111ffff1111fffffff111111ffff1111fffff111ffffff1fffff1111ffffff1111fffffffff111fffffffffffffffffffffffffffffffffff
        fffffffffffff111ffff111111ffffff111fffffffffff111fffff1111fffffff11111ffffff1111ffff111ffffff1ffff1111ffffffff111fffffffff111fffffffffffffffffffffffffffffffffff
        fffffffffffff111ffffff11111fffff11111fffffff11111ffff1111ffffffff11111ffffff1111ffff111ffffff1ffff1111ffffffff1111ffffffff111fffffffffffffffffffffffffffffffffff
        fffffffffffff111fffffff11111fffff111111111111111fffff1111fffffffff1111fffffff111ffff111ffffff1ffff111fffffffff1111ffffffff111fffffffffffffffffffffffffffffffffff
        fffffffffffff111ffffffff1111ffffff1111111111111ffffff111ffffffffffffffffffffffffffff111ffffff1ffff111ffffffffff111ffffffff111fffffffffffffffffffffffffffffffffff
        fffffffffffff111fffffffff111ffffffff111111111ffffffff111ffffffffffffffffffffffffffff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff111fffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffff9dd66cccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9dd66cccffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffd9db6188888ccefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd9db6188888ccefffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffbd66d68688ccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbd66d68688ccccccffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffdb96666888ccebcccbc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdb96666888ccebcccbc9ffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffb96966688bb888c888ccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb96966688bb888c888ccffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffbbb666688888bbb8888c869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbb666688888bbb8888c869ffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffd9966668888ddbbdbccbbc8bfffffffffffffffffffffffffffffffffffffffffffffffffffffffffd9966668888ddbbdbccbbc8bffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff9966666688bdbdbbbbcc8bc89ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966666688bdbdbbbbcc8bc89fffffffffffffffffffffffffffffffffffff
        ffffffffffffffff9969666d86bddbbbbbbbcc8cc6fffffffffffffffffffffffffffffffffffffffffffffffffffffff9969666d86bddbbbbbbbcc8cc6fffffffffffffffffffffffffffffffffffff
        ffffffffffffffff996d966688bdbbbbbbbbccc8b89ffffffffffffffffffffffffffffffffffffffffffffffffffffff996d966688bdbbbbbbbbccc8b89ffffffffffffffffffffffffffffffffffff
        fffffffffffffff9996dd96888bbbbbbbbbbcccc886fffffffffffffffffffffffffffffffffffffffffffffffffffff9996dd96888bbbbbbbbbbcccc886ffffffffffffffffffffffffffffffffffff
        fffffffffffffff9b9666668868bbbbbbbbbccccc88fffffffffffffffffffffffffffffffffffffffffffffffffffff9b9666668868bbbbbbbbbccccc88ffffffffffffffffffffffffffffffffffff
        fffffffffffffff9bbe6666688888888bbbccccc888fffffffffffffffffffffffffffffffffffffffffffffffffffff9bbe6666688888888bbbccccc888ffffffffffffffffffffffffffffffffffff
        fffffffffffffffbbbb696688888d8bdbbbcccce888fffffffffffffffffffffffffffffffffffffffffffffffffffffbbbb696688888d8bdbbbcccce888ffffffffffffffffffffffffffffffffffff
        fffffffffffffffbbcccc66886888ddb8bbbccc888bfffffffffffffffffffffffffffffffffffffffffffffffffffffbbcccc66886888ddb8bbbccc888bffffffffffffffffffffffffffffffffffff
        fffffffffffffffdbbbccb66888888888bbcccc8888fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbbccb66888888888bbcccc8888ffffffffffffffffffffffffffffffffffff
        fffffffffffffffbbbccc666888888888bbcccc8888fffffffffffffffffffffffffffffffffffffffffffffffffffffbbbccc666888888888bbcccc8888ffffffffffffffffffffffffffffffffffff
        fffffffffffffff9dbccc668888888888bbccc88c86fffffffffffffffffffffffffffffffffffffffffffffffffffff9dbccc668888888888bbccc88c86ffffffffffffffffffffffffffffffffffff
        fffffffffffffff99bbcc666886888888bbcc88b886fffffffffffffffffffffffffffffffffffffffffffffffffffff99bbcc666886888888bbcc88b886ffffffffffffffffffffffffffffffffffff
        ffffffffffffffff6bbc996b8888888888bcc88c86fffffffffffffffffffffffffffffffffffffffffffffffffffffff6bbc996b8888888888bcc88c86fffffffffffffffffffffffffffffffffffff
        ffffffffffffffff99bc666bd888888888ccc88889fffffffffffffffffffffffffffffffffffffffffffffffffffffff99bc666bd888888888ccc88889fffffffffffffffffffffffffffffffffffff
        fffffffffffffffff6cc6966bb88888888bc8888bfffffffffffffffffffffffffffffffffffffffffffffffffffffffff6cc6966bb88888888bc8888bffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffff9b96666b888888888888889ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9b96666b888888888888889ffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff9c669d68868888888b889ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9c669d68868888888b889fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff6666d68688888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666d68688888888869ffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffff6996668888888886fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6996668888888886ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffff6968888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6968888888869fffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffff9111111669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9111111669fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    menu = miniMenu.createMenu(
    miniMenu.createMenuItem("Start"),
    miniMenu.createMenuItem("Credits")
    )
    menu.setPosition(70, 100)
    menu.setDimensions(55, 35)
    menu.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollIndicatorColor, 2)
    menu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selection == "Start") {
            menu.close()
        }
        startgame()
    })
}
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    if (a > 0) {
        P1_move_history.push("Left")
        if (P1_move_history.length > 5) {
            P1_move_history.shift()
        }
    }
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    if (a > 0) {
        P1_move_history.push("Down")
        if (P1_move_history.length > 5) {
            P1_move_history.shift()
        }
    }
})
let menu: miniMenu.MenuSprite = null
let Current_Screen = 0
let Combo_store: string[] = []
let P2_Sprite: Sprite = null
let projectile: Sprite = null
let combo_index = 0
let input_index = 0
let P1_move_history: string[] = []
let P1_Sprite: Sprite = null
let P2_Move_History: string[] = []
let a = 0
a = 0
startmenu()
forever(function () {
    if (Proof_of_concept(P1_move_history, Combo_store)) {
        game.splash("It works")
    }
})
forever(function () {
    if (Current_Screen == 1) {
    	
    }
})
