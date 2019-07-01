'use strict'

const showItemsTemplate = require('../templates/item-listing.handlebars')
// const timeoutModule = require('../timeout/timeout-queue.js')
// const store = require('../store')

const onNewItemSuccess = data => {
  // $('#message').text('Created new item!')
  // $('#message').removeClass()
  // $('#message').addClass('success')
  // timeoutModule.overrideTimout()
  // timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  (async () => {
    const randNumMessage = Math.floor(Math.random() * 1000000)
    const randNumHeading = Math.floor(Math.random() * 1000000)
    await $('.wrapper-messages').append(
      `<div id="${randNumMessage}" class="alert message-success alert-dismissible d-none fade col-5" role="alert">
        <div class="alert-heading">
          <h4 id="${randNumHeading}"></h4>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>`
    )

    await $(`#${randNumMessage}`).addClass('show')
    await $(`#${randNumHeading}`).html('')
    await $(`#${randNumHeading}`).text('Added new item')
    await $(`#${randNumMessage}`).removeClass('d-none')
    await setTimeout(() => {
      $(`#${randNumMessage}`).alert('close')
      $(`#${randNumMessage}`).addClass('d-none')
    }, 2000)
  })()
  $('form').trigger('reset')
}

const onNewItemFailure = data => {
  // $('#message').text('Error: could not create item')
  // $('#message').removeClass()
  // $('#message').addClass('failure')
  // timeoutModule.overrideTimout()
  // timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
  $('#message-failure').addClass('show')
  $('#heading-failure').html('')
  $('#heading-failure').text('Failed to add new item')
  $('#message-failure').removeClass('d-none')
  setTimeout(() => {
    $('#message-failure').alert('close')
    $('#message-failure').addClass('d-none')
  }, 2000)
}

const onFindItemSuccess = data => {
  $('form').trigger('reset')
  const showItemsHtml = showItemsTemplate({
    items: data.items
  })
  $('tbody').html(showItemsHtml)
  // $('#message').text('Item(s) found!')
  // timeoutModule.overrideTimout()
  // timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
}

const onFindItemFailure = data => {
  // $('#message').text('Error: could not find item')
  // $('tbody').html('')
  // timeoutModule.overrideTimout()
  // timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}

const onDeleteItemSuccess = data => {
  $('.deleteMessage').text('Deleted item!').fadeOut(2200, function () {
    $(this).delay(2200).empty().show()
  })
  setTimeout(() => $('#deleteConfirm').modal('hide'), 2210)
  // $('.deleteMessage').removeClass()
  // $('.deleteMessage').addClass('success')
  // timeoutModule.overrideTimout()
  // timeoutModule.pushToTimeoutQueue(setTimeout(() => $('.deleteMessage').text(''), 2000))
  // $('form').trigger('reset')
}

const onDeleteItemFailure = data => {
  $('.deleteMessage').text('Error: could not delete').fadeOut(2200, function () {
    $(this).delay(2200).empty().show()
  })

  // $('.deleteMessage').removeClass()
  // $('.deleteMessage').addClass('failure')
  // timeoutModule.overrideTimout()
  // timeoutModule.pushToTimeoutQueue(setTimeout(() => $('.deleteMessage').text(''), 2000))
  // $('form').trigger('reset')
}

const populateUpdateForm = event => {
  // $('.edit-name').val(store.itemName)
  // $('.edit-quantity').val(store.itemQuantity)
  // $('.edit-price').val(store.itemPrice)
}

const onUpdateItemSuccess = (playerTurn, cell) => {
  // $('#message').text('Successfully updated item!')
  // timeoutModule.overrideTimout()
  // timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  (async () => {
    const randNumMessage = Math.floor(Math.random() * 1000000)
    const randNumHeading = Math.floor(Math.random() * 1000000)
    await $('.wrapper-messages').append(
      `<div id="${randNumMessage}" class="alert message-success alert-dismissible d-none fade col-5" role="alert">
        <div class="alert-heading">
          <h4 id="${randNumHeading}"></h4>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>`
    )

    await $(`#${randNumMessage}`).addClass('show')
    await $(`#${randNumHeading}`).html('')
    await $(`#${randNumHeading}`).text('Updated item')
    await $(`#${randNumMessage}`).removeClass('d-none')
    await setTimeout(() => {
      $(`#${randNumMessage}`).alert('close')
      $(`#${randNumMessage}`).addClass('d-none')
    }, 2000)
  })()
  $('form').trigger('reset')
}

const onUpdateItemFailure = data => {
  // $('#message').text('Error: could not update item')
  // timeoutModule.overrideTimout()
  // timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
  $('#message-failure').addClass('show')
  $('#heading-failure').html('')
  $('#heading-failure').text('Failed to add new item')
  $('#message-failure').removeClass('d-none')
  setTimeout(() => {
    $('#message-failure').alert('close')
    $('#message-failure').addClass('d-none')
  }, 2000)
}
const onDisplayAllItemsSuccess = (data) => {
  const showItemsHtml = showItemsTemplate({
    items: data.items
  })
  $('tbody').html(showItemsHtml)
  // if (data.items.length === 0) {
  //   $('#message').text('No items to display. Press new item to create an item!')
  //   timeoutModule.overrideTimout()
  //   timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  // }
}

const onDisplayAllItemsFailure = data => {
  // $('#message').text('Error: could not retrieve items')
  // timeoutModule.overrideTimout()
  // timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
}

module.exports = {
  onNewItemFailure,
  onNewItemSuccess,
  onFindItemFailure,
  onFindItemSuccess,
  onDeleteItemFailure,
  onDeleteItemSuccess,
  populateUpdateForm,
  onUpdateItemFailure,
  onUpdateItemSuccess,
  onDisplayAllItemsFailure,
  onDisplayAllItemsSuccess
}
