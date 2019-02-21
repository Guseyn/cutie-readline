'use strict'

const { AsyncObject } = require('@cuties/cutie')
const readline = require('readline')

// Represented result is stream
class StreamWithClearedScreenDown extends AsyncObject {
  constructor (stream) {
    super(stream)
  }

  syncCall () {
    return (stream, dir) => {
      readline.clearScreenDown(stream)
      return stream
    }
  }
}

module.exports = StreamWithClearedScreenDown
