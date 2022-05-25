import { currentPlayerTurn } from "../tools/Messages"

export default function renderGamestatus() {
    const h2 = document.createElement('h2')
    h2.setAttribute('id', 'game-status')
    root.appendChild(h2)
    h2.textContent = currentPlayerTurn()
}
