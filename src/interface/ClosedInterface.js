'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represented result is interface
class ClosedInterface extends AsyncObject {

  constructor(interface) {
    super(interface);
  }

  definedSyncCall() {
    return (interface) => {
      interface.close();
      return interface;
    }
  }

}

module.exports = ClosedInterface;
