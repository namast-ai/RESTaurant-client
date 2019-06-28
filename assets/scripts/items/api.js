'use strict'

const config = require('../config')
const store = require('../store')

const newItem = formData => {
  console.log(formData)
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
  console.log(formData.item.name)
  console.log(config.apiUrl + `/items/search/${formData.item.name}`)
  return $.ajax({
    url: config.apiUrl + `/items/search/${formData.item.name}`,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const devNewItem = formData => {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      item: {
        'name': 'test',
        'quantity': 1,
        'price': 1
      }
    }
  })
}

const deleteItem = (id) => {
  console.log(config.apiUrl + `/items/${id}`)
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
    url: config.apiUrl + '/items/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      item: {
        'name': 'testtt',
        'quantity': 11,
        'price': 12
      }
    }
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
  devNewItem,
  findItem,
  deleteItem,
  updateItem,
  displayAllItems
}
