'use strict'

const showItemsTemplate = require('../templates/item-listing.handlebars')
const timeoutModule = require('../timeout/timeout-queue.js')
const store = require('../store')

const onNewItemSuccess = data => {
  $('#message').text('Created new item!')
  $('#message').removeClass()
  $('#message').addClass('success')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}

const onNewItemFailure = data => {
  console.log(data)
  $('#message').text('Error: could not create item')
  $('#message').removeClass()
  $('#message').addClass('failure')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}

const onDeleteItemSuccess = data => {
  $('#message').text('Deleted item!')
  $('#message').removeClass()
  $('#message').addClass('success')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}

const onDeleteItemFailure = data => {
  $('#message').text('Error: could not delete item')
  $('#message').removeClass()
  $('#message').addClass('failure')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}

const populateUpdateForm = event => {
  $('.edit-name').val(store.itemName)
  $('.edit-quantity').val(store.itemQuantity)
  $('.edit-price').val(store.itemPrice)
}

const onUpdateItemSuccess = (playerTurn, cell) => {
  $('#message').text('Successfully updated item!')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}

const onUpdateItemFailure = data => {
  $('#message').text('Error: could not update item')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}
const onDisplayAllItemsSuccess = (data) => {
  console.log(data.items[0])
  console.log(data.items.length)
  const showItemsHtml = showItemsTemplate({ items: data.items })
  $('.content').html(showItemsHtml)
  if (data.items.length === 0) {
    console.log('hi')
    $('#message').text('No items to display. Press new item to create an item!')
    timeoutModule.overrideTimout()
    timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  }
}

const onDisplayAllItemsFailure = data => {
  $('#message').text('Error: could not retrieve items')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
}

module.exports = {
  onNewItemFailure,
  onNewItemSuccess,
  onDeleteItemFailure,
  onDeleteItemSuccess,
  populateUpdateForm,
  onUpdateItemFailure,
  onUpdateItemSuccess,
  onDisplayAllItemsFailure,
  onDisplayAllItemsSuccess
}
