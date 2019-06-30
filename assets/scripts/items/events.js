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

// const onDevNewItem = event => {
//   event.preventDefault()
//
//   api.devNewItem()
//     .then(ui.onNewItemSuccess)
//     .then(function () {
//       onDisplayAllItems(event)
//     })
//     .catch(ui.onNewItemFailure)
// }

const onFindItem = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.findItem(formData)
    .then(ui.onFindItemSuccess)
    .catch(ui.onFindItemFailure)
}

const onDeleteConfirm = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  store.delete = id
  $('#deleteConfirm').modal('show')
}

const onDeleteItem = event => {
  event.preventDefault()
  // const id = $(event.target).data('id')
  api.deleteItem(store.delete)
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
  api.updateItem(id, formData)
    .then(function () {
      onDisplayAllItems(event)
    })
    .then(ui.onUpdateItemSuccess)
    .catch(ui.onUpdateItemFailure)
}

const toggleUpdateModal = event => {
  const id = $(event.target).data('id')
  $('#update-item-form').data('id', id)
  $('#update-trailer').modal('toggle')
}

const onDisplayAllItems = () => {
  // event.preventDefault()
  // const form = event.target
  // const formData = getFormFields(form)

  api.displayAllItems()
    .then(ui.onDisplayAllItemsSuccess)
    .catch(ui.onDisplayAllItemsFailure)
}

module.exports = {
  onNewItem,
  //  onDevNewItem,
  onFindItem,
  onDeleteConfirm,
  onDeleteItem,
  toggleUpdateModal,
  onShowUpdate,
  onUpdateItem,
  onDisplayAllItems
}
