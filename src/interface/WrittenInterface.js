'use strict'

const { AsyncObject } = require('@cuties/cutie')

// Represented result is interface
class WrittenInterface extends AsyncObject {
  constructor (Interface, data, key) {
    super(Interface, data, key)
  }

  definedSyncCall () {
    return (Interface, data, key) => {
      Interface.write(data, key)
      return Interface
    }
  }
}

module.exports = WrittenInterface
