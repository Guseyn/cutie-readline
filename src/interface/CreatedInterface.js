'use strict'

const { AsyncObject } = require('@cuties/cutie');
const readline = require('readline');

// Represented result is interface
class CreatedInterface extends AsyncObject {

  constructor(options) {
    super(options);
  }

  definedSyncCall() {
    return (options) => {
      return readline.createInterface(options);
    }
  }

}

module.exports = CreatedInterface;
