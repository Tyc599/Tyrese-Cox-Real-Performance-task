controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    P1_move_history.push("Up")
    if (P1_move_history.length > 5) {
        P1_move_history.shift()
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
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    P1_move_history.push("Right")
    if (P1_move_history.length > 5) {
        P1_move_history.shift()
    }
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    P1_move_history.push("A")
    if (P1_move_history.length > 5) {
        P1_move_history.shift()
    }
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    P1_move_history.push("B")
    if (P1_move_history.length > 5) {
        P1_move_history.shift()
    }
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    P1_move_history.push("Left")
    if (P1_move_history.length > 5) {
        P1_move_history.shift()
    }
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    P1_move_history.push("Down")
    if (P1_move_history.length > 5) {
        P1_move_history.shift()
    }
})
let combo_index = 0
let input_index = 0
let P1_move_history: string[] = []
let Combo_store = [
"B",
"B",
"A",
"B",
"A"
]
let Current_Screen = 1
forever(function () {
    if (Proof_of_concept(P1_move_history, Combo_store)) {
        game.splash("It works")
    }
    scene.setBackgroundImage(assets.image`Title Screen`)
})
forever(function () {
    if (Current_Screen == 1) {
    	
    }
})
