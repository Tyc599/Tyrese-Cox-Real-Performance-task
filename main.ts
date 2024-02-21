controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(P2_Sprite)
    P2_Move_History.push("B")
    if (P2_Move_History.length > 5) {
        P2_Move_History.shift()
    }
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(P1_Sprite)
    P1_move_history.push("Up")
    if (P1_move_history.length > 5) {
        P1_move_history.shift()
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(P2_Sprite)
    P2_Move_History.push("A")
    if (P2_Move_History.length > 5) {
        P2_Move_History.shift()
    }
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(P2_Sprite)
    P2_Move_History.push("Down")
    if (P2_Move_History.length > 5) {
        P2_Move_History.shift()
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
    controller.moveSprite(P2_Sprite)
    P2_Move_History.push("Up")
    if (P2_Move_History.length > 5) {
        P2_Move_History.shift()
    }
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(P2_Sprite)
    P2_Move_History.push("Right")
    if (P2_Move_History.length > 5) {
        P2_Move_History.shift()
    }
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(P1_Sprite)
    P1_move_history.push("Left")
    if (P1_move_history.length > 5) {
        P1_move_history.shift()
    }
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(P1_Sprite)
    P1_move_history.push("Right")
    if (P1_move_history.length > 5) {
        P1_move_history.shift()
    }
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(P1_Sprite)
    P1_move_history.push("A")
    if (P1_move_history.length > 5) {
        P1_move_history.shift()
    }
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(P1_Sprite)
    P1_move_history.push("B")
    if (P1_move_history.length > 5) {
        P1_move_history.shift()
    }
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(P1_Sprite)
    P1_move_history.push("Left")
    if (P1_move_history.length > 5) {
        P1_move_history.shift()
    }
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(P1_Sprite)
    P1_move_history.push("Down")
    if (P1_move_history.length > 5) {
        P1_move_history.shift()
    }
})
let combo_index = 0
let input_index = 0
let P1_move_history: string[] = []
let P2_Move_History: string[] = []
let P2_Sprite: Sprite = null
let P1_Sprite: Sprite = null
let Combo_store = [
"B",
"B",
"A",
"B",
"A"
]
let Current_Screen = 1
scene.setBackgroundImage(assets.image`cityscape2`)
if (game.askForNumber("1 or 2", 1) == 1) {
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
} else {
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
}
P1_Sprite.setStayInScreen(true)
P2_Sprite.setStayInScreen(true)
forever(function () {
    if (Proof_of_concept(P1_move_history, Combo_store)) {
        game.splash("It works")
    }
})
forever(function () {
    if (Current_Screen == 1) {
    	
    }
})
