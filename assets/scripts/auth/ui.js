'use strict'

// const store = require('../store')
const timeoutModule = require('../timeout/timeout-queue.js')
const store = require('../store')

const onSignUpSuccess = responseData => {
  store.signUpPassed = true
  $('form').trigger('reset')
}

const onSignUpFailure = responseData => {
  // $('#signUpFailure').removeClass('invisible')
  // setTimeout(() => $('#signUpFailure').addClass('invisible'), 3000)
  $('#signUpFailure').removeClass('invisible')
  setTimeout(() => $('#signInFailure').addClass('invisible'), 3000)
  // $('#message').removeClass()
  // $('#message').addClass('failure')
  // timeoutModule.overrideTimout()
  // timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}

const onSignInSuccess = responseData => {
  $('form').trigger('reset')
  $('#landingSignedOut').addClass('d-none')
  $('#landingSignedIn').removeClass('d-none')
  $('#displayAllItems').show()
  $('#companyName').text(`${responseData.user.company}`)

  store.user = responseData.user
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
  $('#sidebar-wrapper').removeClass('active')
  $('.menu-toggle > .fa-bars, .menu-toggle > .fa-times').toggleClass('fa-bars fa-times')
  $('#message').text('Successfully signed out')
  $('#message').removeClass()
  $('#message').addClass('success')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
  $('#landingSignedOut').removeClass('d-none')
  $('#landingSignedIn').addClass('d-none')
  $('tbody').html(
    `            <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">No items to show</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>`
  )
  store.signUpPassed = false
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
  $('#message').text('Error: failed to sign out').fadeOut(3000)
  $('.password-message').show()
  // $('#message').removeClass()
  // $('#message').addClass('failure')
  // timeoutModule.overrideTimout()
  // timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}

const onChangePasswordSuccess = () => {
  $('.password-message').text('Successfully changed password').fadeOut(3000)
  $('.password-message').show()
  // // $('.password-message').addClass('success')
  // timeoutModule.overrideTimout()
  // timeoutModule.pushToTimeoutQueue(setTimeout(() => $('.password-message').text(''), 2000))
  $('form').trigger('reset')
}

const onChangePasswordFailure = () => {
  $('.password-message').text('Error: could not change password').fadeOut(3000)
  $('.password-message').show()
  // // $('.password-message').removeClass()
  // // $('.password-message').addClass('failure')
  // timeoutModule.overrideTimout()
  // timeoutModule.pushToTimeoutQueue(setTimeout(() => $('.password-message').text(''), 2000))
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
