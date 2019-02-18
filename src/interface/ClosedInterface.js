'use strict'

const { AsyncObject } = require('@cuties/cutie')

// Represented result is interface
class ClosedInterface extends AsyncObject {
  constructor (Interface) {
    super(Interface)
  }

  definedSyncCall () {
    return (Interface) => {
      Interface.close()
      return Interface
    }
  }
}

module.exports = ClosedInterface
