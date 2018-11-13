'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represented result is interface
class PausedInterface extends AsyncObject {

  constructor(interface) {
    super(interface);
  }

  definedSyncCall() {
    return (interface) => {
      interface.pause();
      return interface;
    }
  }

}

module.exports = PausedInterface;
