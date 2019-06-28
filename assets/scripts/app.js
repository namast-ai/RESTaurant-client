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
  $('#dev-signIn').on('click', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-pw').on('submit', authEvents.onChangePassword)

  // item
  $('#create-item-form').on('submit', itemEvents.onNewItem)
  $('#new').on('click', itemEvents.onDevNewItem)
  $('tbody').on('click', 'i.delete', itemEvents.onDeleteItem)
  $('tbody').on('click', 'i.update', itemEvents.onUpdateItem)
  $('.content').on('click', '.remove-item', itemEvents.onDeleteItem)
  $('#get-item').on('submit', itemEvents.onGetItem)
//  $('#update-item').on('submit', itemEvents.onUpdateItem)
  $('.content').on('click', '.update-item', itemEvents.onShowUpdate)
  $('.content').on('submit', '.change-item', itemEvents.onUpdateItem)
  $('#index').on('click', itemEvents.onDisplayAllItems)
  // Closes the sidebar menu
  $('.menu-toggle').click(function (e) {
    e.preventDefault()
    $('#sidebar-wrapper').toggleClass('active')
    $('.menu-toggle > .fa-bars, .menu-toggle > .fa-times').toggleClass('fa-bars fa-times')
    $(this).toggleClass('active')
  })
})
