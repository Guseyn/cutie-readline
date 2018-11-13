'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represented result is interface
class WrittenInterface extends AsyncObject {

  constructor(interface, data, key) {
    super(interface, data, key);
  }

  definedSyncCall() {
    return (interface, data, key) => {
      interface.write(data, key);
      return interface;
    }
  }

}

module.exports = WrittenInterface;
