import playerChange from './playerChange'
import { drawMessage, winningMessage,} from '../tools/Messages'
import {winningConditions , gameState , gameActive} from '../tools/needs'
export default function resultValidation() {
  let roundWon = false
  for (let i = 0; i < 8; i++) {
    const winCondition = winningConditions[i]
    let a = gameState[winCondition[0]]
    let b = gameState[winCondition[1]]
    let c = gameState[winCondition[2]]
    if (a === '' || b === '' || c === '') {
      continue
    }
    if (a === b && b === c) {
      roundWon = true
      break
    }
  }

  if (roundWon) {
    document.getElementById('game-status').innerHTML = winningMessage()
    gameActive = false
    return
  }

  let roundDraw = !gameState.includes('')
  if (roundDraw) {
    document.getElementById('game-status').innerHTML = drawMessage()
    gameActive = false
    return
  }

  playerChange()
}
