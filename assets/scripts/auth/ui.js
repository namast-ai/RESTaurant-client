'use strict'

const store = require('../store')
const timeoutModule = require('../timeout/timeout-queue.js')

const onSignUpSuccess = responseData => {
  $('#message').show()
  $('#message').text('Successfully created an account!')
  $('#message').removeClass()
  $('#message').addClass('success')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}

const onSignUpFailure = responseData => {
  $('#message').show()
  $('#message').text('Error: could not create account')
  $('#message').removeClass()
  $('#message').addClass('failure')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}

const onSignInSuccess = responseData => {
  $('#message').show()
  $('#message').text('Successfully signed in!')
  $('#message').removeClass()
  $('#message').addClass('success')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
  $('#signOut').show()
  $('#changePW').show()
  $('#Item').show()
  $('#displayAllItems').show()
  $('#signUp').hide()
  $('#signIn').hide()
  $('#newItem').show()
  $('#displayAllItems').show()

  store.user = responseData.user
  console.log(store.user.token)
}

const onSignInFailure = responseData => {
  $('#message').show()
  $('#message').text('Error: Failed to Sign In.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}

const onSignOutSuccess = () => {
  $('#message').text('Successfully Signed Out')
  $('#message').removeClass()
  $('#message').addClass('success')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
  $('#signOut').hide()
  $('#changePW').hide()
  $('#newItem').hide()
  $('#displayAllItems').hide()
  $('#signUp').show()
  $('#signIn').show()
  $('#newItem').hide()
  $('#displayAllItems').hide()
  $('.content').text('')
}

const onSignOutFailure = () => {
  $('#message').text('Error: Failed to Sign Out. Lol.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}

const onChangePasswordSuccess = () => {
  $('#message').text('Successfully Changed Password')
  $('#message').removeClass()
  $('#message').addClass('success')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}

const onChangePasswordFailure = () => {
  $('#message').text('Error: Could not Change Password.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}

module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInFailure,
  onSignInSuccess,
  onSignOutFailure,
  onSignOutSuccess,
  onChangePasswordFailure,
  onChangePasswordSuccess
}
