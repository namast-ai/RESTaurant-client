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

const onShowUpdate = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  $(`#item-${id}`).toggleClass('d-none')
  store.itemName = $(`#item-name-${id}`).text().trim()
  store.itemQuantity = $(`#item-quantity-${id}`).text().trim()
  store.itemPrice = $(`#item-price-${id}`).text().trim()
  ui.populateUpdateForm()
}

const onUpdateItem = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const formData = getFormFields(event.target)
  console.log(id)
  console.log(formData)
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
  $('.content').toggleClass('d-none')
  const form = event.target
  const formData = getFormFields(form)

  api.displayAllItems(formData)
    .then(ui.onDisplayAllItemsSuccess)
    .catch(ui.onDisplayAllItemsFailure)
}

module.exports = {
  onNewItem,
  onDeleteItem,
  onShowUpdate,
  onUpdateItem,
  onDisplayAllItems
}
