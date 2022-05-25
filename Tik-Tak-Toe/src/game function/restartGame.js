import { gameActive, currentPlayer, gameState } from '../tools/needs'
import { currentPlayerTurn } from '../tools/Messages'
export default function restartGame() {
  gameActive = true
  currentPlayer = 'X'
  gameState = ['', '', '', '', '', '', '', '', '']
  document.getElementById('game-status').innerHTML = currentPlayerTurn()
  document.querySelectorAll('.cell').forEach(cell => (cell.innerHTML = ''))
}