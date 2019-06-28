'use strict'

const config = require('../config')
const store = require('../store')

const newItem = formData => {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

const findItem = formData => {
  return $.ajax({
    url: config.apiUrl + `/items/search/${formData.item.name}`,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// const devNewItem = formData => {
//   return $.ajax({
//     url: config.apiUrl + '/items',
//     method: 'POST',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//     data: {
//       item: {
//         'name': 'test',
//         'quantity': 1,
//         'price': 1
//       }
//     }
//   })
// }

const deleteItem = (id) => {
  return $.ajax({
    url: config.apiUrl + `/items/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateItem = (id, formData) => {
  return $.ajax({
    url: config.apiUrl + `/items/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

const displayAllItems = () => {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  newItem,
  // devNewItem,
  findItem,
  deleteItem,
  updateItem,
  displayAllItems
}
