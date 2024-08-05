const restartbutton = document.getElementById("restart")
const statustext = document.getElementById("statustext")
const cells = document.getElementsByClassName("cell")
let gamestate = ["", "", "", "", "", "", "", "", "",]
let currentplayer = "X"
let running = false
const winconditons = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function checkwinner() {
    let iswinner = false
    for (let index = 0; index < winconditons.length; index++) {
        const condition = winconditons[index]
        const [cell1, cell2, cell3] = condition
        if (gamestate[cell1] == currentplayer && gamestate[cell2] == currentplayer && gamestate[cell3] == currentplayer) {
            iswinner=true
            break
        }
    }
}

function clickcell(event) {
    const cell = event.target
    const position = cell.dataset.index
    if (gamestate[position] !== "" || !running) {
        return
    }
    gamestate[position] = currentplayer
    cell.textContent = currentplayer
    checkwinner()
    if (currentplayer == "X") {
        currentplayer = "O"
    } else {
        currentplayer = "X"
    }
}

function init() {
    for (let index = 0; index < cells.length; index++) {
        const cell = cells[index]
        cell.addEventListener("click", clickcell)
    }
    running = true
}

init()