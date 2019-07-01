'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const itemEvents = require('../items/events')

const onSignUp = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  $('#companyName').text(`${formData.credentials.company}`)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
    .then(() => {
      if (store.signUpPassed) {
        onAutoSignIn(formData.credentials.email, formData.credentials.password)
      }
    })
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signIn(formData)
    // .then(responseData => {
    //   store.user = responseData.user
    //   ui.onSignInSuccess()
    // })
    .then(ui.onSignInSuccess)
    .then(itemEvents.onDisplayAllItems)
    .catch(ui.onSignInFailure)
}

const onSignOut = event => {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onChangePassword = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onAutoSignIn = (email, password) => {
  const reqObj = {
    'credentials': {
      'email': email,
      'password': password
    }
  }
  api.signIn(reqObj)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
