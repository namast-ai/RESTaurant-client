'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onNewItem = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.newItem(formData)
    .then(ui.onNewItemSuccess)
    .then(function () {
      onDisplayAllItems(event)
    })
    .catch(ui.onNewItemFailure)
}

const onDeleteItem = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteItem(id)
    .then(ui.onDeleteItemSuccess)
    .then(function () {
      onDisplayAllItems(event)
    })
    .catch(ui.onDeleteItemFailure)
}

const onUpdateItem = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const formData = getFormFields(event.target)
  api.updateItem(id, formData)
    .then(function () {
      onDisplayAllItems(event)
    })
    .then(ui.onUpdateItemSuccess)
    .catch(ui.onUpdateItemFailure)
}

const onDisplayAllItems = event => {
  console.log(store.user.token)
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.displayAllItems(formData)
    .then(ui.onDisplayAllItemsSuccess)
    .catch(ui.onDisplayAllItemsFailure)
}

module.exports = {
  onNewItem,
  onDeleteItem,
  onUpdateItem,
  onDisplayAllItems
}
