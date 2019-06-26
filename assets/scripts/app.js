'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const itemEvents = require('./items/events')

$(() => {
  // user
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  // item
  $('#new-item').on('submit', itemEvents.onNewItem)
  $('#delete-item').on('submit', itemEvents.onDeleteItem)
  $('.content').on('click', '.remove-item', itemEvents.onDeleteItem)
  $('#get-item').on('submit', itemEvents.onGetItem)
  $('#update-item').on('submit', itemEvents.onUpdateItem)
  $('.content').on('submit', '.change-item', itemEvents.onUpdateItem)
  $('#display-all-items').on('submit', itemEvents.onDisplayAllItems)
})
