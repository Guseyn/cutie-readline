'use strict'

const { AsyncObject } = require('@cuties/cutie');
const readline = require('readline');

// Represented result is stream
class StreamWithCursorTo extends AsyncObject {

  constructor(stream, x, y) {
    super(stream, x, y);
  }

  definedSyncCall() {
    return (stream, x, y) => {
      readline.cursorTo(stream, x, y);
      return stream;
    }
  }

}

module.exports = StreamWithCursorTo;
