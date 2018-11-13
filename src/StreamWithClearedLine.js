'use strict'

const { AsyncObject } = require('@cuties/cutie');
const readline = require('readline');

// Represented result is stream
class StreamWithClearedLine extends AsyncObject {

  constructor(stream, dir) {
    super(stream, dir);
  }

  definedSyncCall() {
    return (stream, dir) => {
      readline.clearLine(stream, dir);
      return stream;
    }
  }

}

module.exports = StreamWithClearedLine;
