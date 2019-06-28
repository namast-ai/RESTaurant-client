'use strict'

// const store = require('../store')
const timeoutModule = require('../timeout/timeout-queue.js')
const store = require('../store')

const onSignUpSuccess = responseData => {
  console.log(responseData)
  store.signUpPassed = true
  // $('#message').show()
  // $('#message').text('Successfully created an account!')
  // $('#message').removeClass()
  // $('#message').addClass('success')
  // timeoutModule.overrideTimout()
  // timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
  return responseData
}

const onSignUpFailure = responseData => {
  console.log(responseData)
  $('#signUpFailure').removeClass('invisible')
  setTimeout(() => $('#signUpFailure').addClass('invisible'), 3000)
  // $('#message').show()
  // $('#message').text('Error: could not create account')
  // $('#message').removeClass()
  // $('#message').addClass('failure')
  // timeoutModule.overrideTimout()
  // timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
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
  $('#landingSignedOut').addClass('d-none')
  $('#landingSignedIn').removeClass('d-none')
  // $('#signOut').show()
  // $('#changePW').show()
  // $('#Item').show()
  // $('#displayAllItems').show()
  // $('#signUp').hide()
  // $('#signIn').hide()
  // $('#newItem').show()
  // $('#displayAllItems').show()

  // store.user = responseData.user
  // console.log(store.user.token)
}

const onSignInFailure = responseData => {
  $('#signInFailure').removeClass('invisible')
  setTimeout(() => $('#signInFailure').addClass('invisible'), 3000)
  // $('#message').show()
  // $('#message').text('Error: failed to sign in')
  // $('#message').removeClass()
  // $('#message').addClass('failure')
  // timeoutModule.overrideTimout()
  // timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}

const onSignOutSuccess = () => {
  $('#message').text('Successfully signed out')
  $('#message').removeClass()
  $('#message').addClass('success')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
  $('#landingSignedOut').removeClass('d-none')
  $('#landingSignedIn').addClass('d-none')
  // $('#signOut').hide()
  // $('#changePW').hide()
  // $('#newItem').hide()
  // $('#displayAllItems').hide()
  // $('#signUp').show()
  // $('#signIn').show()
  // $('#newItem').hide()
  // $('#displayAllItems').hide()
  // $('.content').text('')
}

const onSignOutFailure = () => {
  $('#message').text('Error: failed to sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}

const onChangePasswordSuccess = () => {
  $('.password-message').text('Successfully changed password').fadeOut(3000)
  $('.password-message').show()
  // $('.password-message').addClass('success')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('.password-message').text(''), 2000))
  $('form').trigger('reset')
}

const onChangePasswordFailure = () => {
  $('.password-message').text('Error: could not change password').fadeOut(3000)
  $('.password-message').show()
  // $('.password-message').removeClass()
  // $('.password-message').addClass('failure')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('.password-message').text(''), 2000))
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
