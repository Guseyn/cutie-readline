'use strict'

const { AsyncObject } = require('@cuties/cutie')

// Represented result is interface
class InterfaceWithPrompt extends AsyncObject {
  constructor (Interface, prompt) {
    super(Interface, prompt)
  }

  definedSyncCall () {
    return (Interface, prompt) => {
      Interface.setPrompt(prompt)
      return Interface
    }
  }
}

module.exports = InterfaceWithPrompt
