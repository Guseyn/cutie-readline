'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represented result is interface
class InterfaceWithPrompt extends AsyncObject {

  constructor(interface, prompt) {
    super(interface, prompt);
  }

  definedSyncCall() {
    return (interface, prompt) => {
      interface.setPrompt(prompt);
      return interface;
    }
  }

}

module.exports = InterfaceWithPrompt;
