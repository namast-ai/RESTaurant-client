'use strict'

const showItemsTemplate = require('../templates/item-listing.handlebars')
const timeoutModule = require('../timeout/timeout-queue.js')

const onNewItemSuccess = data => {
  $('#message').text('Created New Item!')
  $('#message').removeClass()
  $('#message').addClass('success')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}

const onNewItemFailure = data => {
  console.log(data)
  $('#message').text('Error: Could not Create Item.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}

const onDeleteItemSuccess = data => {
  $('#message').text('Deleted Item!')
  $('#message').removeClass()
  $('#message').addClass('success')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}

const onDeleteItemFailure = data => {
  $('#message').text('Error: Could not Delete Item.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}

const onUpdateItemSuccess = (playerTurn, cell) => {
  $('#message').text('Successfully Updated Item!')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}

const onUpdateItemFailure = data => {
  $('#message').text('Error: Could not Update Item.')
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
    $('#message').text('No Items to Display. Press New Item to Create a Item!')
    timeoutModule.overrideTimout()
    timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  }
}
// AHHHHHHHH

const onDisplayAllItemsFailure = data => {
  $('#message').text('Error: Could Not Retrieve Items')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
}

module.exports = {
  onNewItemFailure,
  onNewItemSuccess,
  onDeleteItemFailure,
  onDeleteItemSuccess,
  onUpdateItemFailure,
  onUpdateItemSuccess,
  onDisplayAllItemsFailure,
  onDisplayAllItemsSuccess
}
