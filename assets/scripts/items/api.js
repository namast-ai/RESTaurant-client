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

const deleteItem = (formData) => {
  return $.ajax({
    url: config.apiUrl + `/items/${formData}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

const updateItem = (id, formData) => {
  return $.ajax({
    url: config.apiUrl + '/items/' + id,
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
  deleteItem,
  updateItem,
  displayAllItems
}
