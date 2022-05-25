import { currentPlayer } from '../tools/needs'
import {currentPlayerTurn} from '../tools/Messages'
export default function playerChange() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  document.getElementById('game-status').innerHTML = currentPlayerTurn()
}
