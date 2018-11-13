'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represented result is interface
class QuestionedInterface extends AsyncObject {

  constructor(interface, query) {
    super(interface, query);
  }

  definedAsyncCall() {
    return (interface, query, callback) => {
      this.interface = interface;
      interface.question(query, callback);
    }
  }

  onResult() {
    return this.interface;
  }

}

module.exports = QuestionedInterface;
