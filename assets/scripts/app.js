'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const itemEvents = require('./items/events')
const store = require('./store.js')

$(() => {
  store.signUpPassed = false
  // user
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('.sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  // item
  $('#new-item').on('submit', itemEvents.onNewItem)
  $('#delete-item').on('submit', itemEvents.onDeleteItem)
  $('.content').on('click', '.remove-item', itemEvents.onDeleteItem)
  $('#get-item').on('submit', itemEvents.onGetItem)
  $('#update-item').on('submit', itemEvents.onUpdateItem)
  $('.content').on('click', '.update-item', itemEvents.onShowUpdate)
  $('.content').on('submit', '.change-item', itemEvents.onUpdateItem)
  $('.display-all-items').on('submit', itemEvents.onDisplayAllItems)
  // Closes the sidebar menu
  $('.menu-toggle').click(function (e) {
    e.preventDefault()
    $('#sidebar-wrapper').toggleClass('active')
    $('.menu-toggle > .fa-bars, .menu-toggle > .fa-times').toggleClass('fa-bars fa-times')
    $(this).toggleClass('active')
  })
})
