import { gameState ,currentPlayer} from "../tools/needs"
export default function cellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer
    clickedCell.innerHTML = currentPlayer
  }