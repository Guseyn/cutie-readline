'use strict'

const { AsyncObject } = require('@cuties/cutie')

// Represented result is interface
class InterfaceWithCloseEvent extends AsyncObject {
  constructor (Interface, event) {
    super(Interface, event)
  }

  // event is an Event with body()
  syncCall () {
    return (Interface, event) => {
      Interface.on('close', event)
      return Interface
    }
  }
}

module.exports = InterfaceWithCloseEvent
