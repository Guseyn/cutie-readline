'use strict'

const { AsyncObject } = require('@cuties/cutie');
const readline = require('readline');

// Represented result is stream
class StreamWithEmittedKeypressEvents extends AsyncObject {

  constructor(stream, interface) {
    super(stream, interface);
  }

  definedSyncCall() {
    return (stream, interface) => {
      readline.emitKeypressEvents(stream, interface);
      return stream;
    }
  }

}

module.exports = StreamWithEmittedKeypressEvents;
