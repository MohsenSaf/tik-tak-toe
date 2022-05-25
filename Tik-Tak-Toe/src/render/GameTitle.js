export default function renderGameTitle () {
    const h1 = document.createElement('h1')
    h1.setAttribute('class', 'game-title')
    h1.textContent = 'Tik Tak Toa'

    root.appendChild(h1)
}