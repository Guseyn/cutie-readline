'use strict'

const { AsyncObject } = require('@cuties/cutie')

// Represented result is interface
class PausedInterface extends AsyncObject {
  constructor (Interface) {
    super(Interface)
  }

  definedSyncCall () {
    return (Interface) => {
      Interface.pause()
      return Interface
    }
  }
}

module.exports = PausedInterface
