import cellPlayed from './CellPlayed' 
import resultValidation from './result'
import { gameState,gameActive } from '../tools/needs'

export default function cellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target
  const clickedCellIndex = parseInt(clickedCell.getAttribute('id'))

  if (gameState[clickedCellIndex] !== '' || !gameActive) {
    return
  }

  cellPlayed(clickedCell, clickedCellIndex)
  resultValidation()
}
