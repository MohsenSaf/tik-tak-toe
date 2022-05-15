const axios = require('axios')

axios('https://jsonplaceholder.typicode.com/users/1')
  .then(response => console.log(response.data.name))
  .catch(err => console.log(err))
