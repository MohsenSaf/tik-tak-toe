import renderGameTitle from "./GameTitle"
import renderGamestatus from "./GameStatus"
import renderRestartButton from "./RestartButon"
import cellClick from '../game function/CellClicked'
import '../assets/css/style.css'
export default function renderMainTable() {
  const board = document.createElement('div')
  board.setAttribute('class', 'board')

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div')
    cell.setAttribute('class', 'cell')
    cell.setAttribute('id', `${i}`)
    cell.addEventListener('click',cellClick)
    board.appendChild(cell)
  }
  renderGameTitle()
  root.appendChild(board)
  renderGamestatus()
  renderRestartButton()
}
