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
// Scroll to top function
const scrollBar = () => {
  $(document).ready(function () {
    const checkPosition = function () {
      if ($(this).scrollTop() > 60) {
        $('.back-to-top').fadeIn()
      } else {
        $('.back-to-top').fadeOut()
      }
    }
    // Show or hide the sticky footer button
    $(window).scroll(checkPosition)
    // scroll to 0px on click
    $('.back-to-top').click(function (event) {
      event.preventDefault()
      $('body, html').animate({
        scrollTop: 0
      }, 300)
    })
    // Check position to hide on page load
    checkPosition()
  })
}

module.exports = {
  onNewItem,
  //  onDevNewItem,
  onFindItem,
  onDeleteItem,
  toggleUpdateModal,
  onShowUpdate,
  onUpdateItem,
  onDisplayAllItems,
  scrollBar
}
