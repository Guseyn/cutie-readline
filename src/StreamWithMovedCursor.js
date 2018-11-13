'use strict'

const { AsyncObject } = require('@cuties/cutie');
const readline = require('readline');

// Represented result is stream
class StreamWithMovedCursor extends AsyncObject {

  constructor(stream, dx, dy) {
    super(stream, dx, dy);
  }

  definedSyncCall() {
    return (stream, dx, dy) => {
      readline.moveCursor(stream, dx, dy);
      return stream;
    }
  }

}

module.exports = StreamWithMovedCursor;
