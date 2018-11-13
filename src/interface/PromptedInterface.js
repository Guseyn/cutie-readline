'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represented result is interface
class PromptedInterface extends AsyncObject {

  constructor(Interface, preserveCursor) {
    super(Interface, preserveCursor);
  }

  definedSyncCall() {
    return (Interface, preserveCursor) => {
      Interface.prompt(preserveCursor);
      return Interface;
    }
  }

}

module.exports = PromptedInterface;
