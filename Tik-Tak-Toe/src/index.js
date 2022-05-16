const root = document.getElementById('root')

function createTable () {
  const board = document.createElement('div')
  board.setAttribute('class', 'board')

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div')
    cell.setAttribute('class', 'cell')
    board.appendChild(cell)
  }

  root.appendChild(board)
  winningLayout()
}

function winningLayout () {
  const winningDiv = document.createElement('div')
  winningDiv.setAttribute('class', 'winning-message')
  winningDiv.setAttribute('id', 'winningMessage')

  const winningText = document.createElement('div')
  winningText.setAttribute('id', 'messageText')

  const restartButton = document.createElement('button')
  restartButton.setAttribute('id', 'restartButton')
  restartButton.textContent = 'Restart Game'

  winningDiv.appendChild(winningText)
  winningDiv.appendChild(restartButton)
  root.appendChild(winningDiv)
}

createTable()

let isPlayer_O_Turn = false

const Player_X = 'x'
const Player_O = 'o'
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

