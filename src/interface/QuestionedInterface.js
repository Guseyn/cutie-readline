'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represented result is interface
class QuestionedInterface extends AsyncObject {

  constructor(Interface, query) {
    super(Interface, query);
  }

  definedAsyncCall() {
    return (Interface, query, callback) => {
      this.Interface = Interface;
      Interface.question(query, callback);
    }
  }

  onResult() {
    return this.Interface;
  }

}

module.exports = QuestionedInterface;
