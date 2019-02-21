'use strict'

const { AsyncObject } = require('@cuties/cutie')

// Represented result is interface
class InterfaceWithResumeEvent extends AsyncObject {
  constructor (Interface, event) {
    super(Interface, event)
  }

  // event is an Event with body()
  syncCall () {
    return (Interface, event) => {
      Interface.on('resume', event)
      return Interface
    }
  }
}

module.exports = InterfaceWithResumeEvent
