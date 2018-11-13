'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represented result is interface
class ResumedInterface extends AsyncObject {

  constructor(interface) {
    super(interface);
  }

  definedSyncCall() {
    return (interface) => {
      interface.resume();
      return interface;
    }
  }

}

module.exports = ResumedInterface;
