'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represented result is interface
class ResumedInterface extends AsyncObject {

  constructor(Interface) {
    super(Interface);
  }

  definedSyncCall() {
    return (Interface) => {
      Interface.resume();
      return Interface;
    }
  }

}

module.exports = ResumedInterface;
