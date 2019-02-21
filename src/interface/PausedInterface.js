'use strict'

const { AsyncObject } = require('@cuties/cutie')

// Represented result is interface
class PausedInterface extends AsyncObject {
  constructor (Interface) {
    super(Interface)
  }

  syncCall () {
    return (Interface) => {
      Interface.pause()
      return Interface
    }
  }
}

module.exports = PausedInterface
