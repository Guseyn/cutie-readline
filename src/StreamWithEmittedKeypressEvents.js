'use strict'

const { AsyncObject } = require('@cuties/cutie');
const readline = require('readline');

// Represented result is stream
class StreamWithEmittedKeypressEvents extends AsyncObject {

  constructor(stream, Interface) {
    super(stream, Interface);
  }

  definedSyncCall() {
    return (stream, Interface) => {
      readline.emitKeypressEvents(stream, Interface);
      return stream;
    }
  }

}

module.exports = StreamWithEmittedKeypressEvents;
