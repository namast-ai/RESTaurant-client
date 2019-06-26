'use strict'

const timeoutQueue = []

const pushToTimeoutQueue = (timeout) => {
  timeoutQueue.push(timeout)
}

const overrideTimout = () => {
  if (timeoutQueue.length !== 0) {
    clearTimeout(timeoutQueue.pop())
  }
}

module.exports = {
  pushToTimeoutQueue,
  overrideTimout
}
