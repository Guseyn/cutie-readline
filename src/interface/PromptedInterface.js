'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represented result is interface
class PromptedInterface extends AsyncObject {

  constructor(interface, preserveCursor) {
    super(interface, preserveCursor);
  }

  definedSyncCall() {
    return (interface, preserveCursor) => {
      interface.prompt(preserveCursor);
      return interface;
    }
  }

}

module.exports = PromptedInterface;
