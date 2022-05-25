import { currentPlayer } from "./needs"
export const winningMessage = () => `Player ${currentPlayer} has won!`
export const drawMessage = () => `Game ended in a draw!`
export const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`

// export const statusDisplay = document.getElementById('game-status')
// statusDisplay.innerHTML = currentPlayerTurn()