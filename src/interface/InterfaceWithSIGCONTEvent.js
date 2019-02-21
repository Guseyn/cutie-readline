'use strict'

const { AsyncObject } = require('@cuties/cutie')

// Represented result is interface
class InterfaceWithSIGCONTEvent extends AsyncObject {
  constructor (Interface, event) {
    super(Interface, event)
  }

  // event is an Event with body()
  syncCall () {
    return (Interface, event) => {
      Interface.on('SIGCONT', event)
      return Interface
    }
  }
}

module.exports = InterfaceWithSIGCONTEvent
