const statusDisplay = document.getElementById('game-status')

let gameActive = true
let currentPlayer = 'X'
let gameState = ['', '', '', '', '', '', '', '', '']


statusDisplay.innerHTML = currentPlayerTurn()

