import restartGame from '../game function/restartGame'
export default function renderRestartButton() {
  const button = document.createElement('button')
  button.setAttribute('class', 'game-restart')
  button.textContent = 'Restart Game'
  button.addEventListener('click',restartGame)
  root.appendChild(button)
}
