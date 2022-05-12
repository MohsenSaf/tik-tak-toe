const COLUMNS = ['id', 'name', 'username', 'email', 'address']

const root = document.getElementById('root')

const h2 = document.createElement('h2')
h2.textContent = 'Users list'


const table = document.createElement('table')
table.setAttribute('border' , 1)
table.setAttribute('width' , '100%')

const tr = document.createElement('tr')
COLUMNS.forEach(el => {
    const th = document.createElement('th')
    th.textContent = el
    tr.appendChild(th)
})


root.appendChild(h2)
root.appendChild(table)
table.appendChild(tr)


function createUserTable(users) {
    users.forEach(el => {
        const user = new User(el)
        table.appendChild(user.render())
    })
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usesr => createUserTable(usesr))
    .catch(err => console.log(err))


class User {

    constructor({ id, name, username, email, address: _address }) {
        this.id = id
        this.name = name
        this.email = email
        this.username = username
        this._address = _address 
    }

    get address() {
        return `${this._address.city} ${this._address.street} ${this._address.suite}`
    }

    remove() {
        document.getElementById(`tr-${this.id}`).remove()
    }

    render() {
        const tr = document.createElement('tr')
        tr.setAttribute('id', `tr-${this.id}`)

        COLUMNS.forEach(el => {
            const td = document.createElement('td')

            td.textContent = this[el]

            tr.appendChild(td)
        })

        const action = document.createElement('td')
        action.textContent = 'x'
        action.style.color = 'red'
        action.style.cursor = 'pointer'
        action.style.padding = '5px'
        action.addEventListener('click', el => this.remove(el))

        tr.appendChild(action)

        return tr
    }
}