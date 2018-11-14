'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represented result is string
class AnswersOfQuestionedInterface extends AsyncObject {

  constructor(Interface, query, previousAnswers) {
    super(Interface, query, previousAnswers || []);
  }

  definedAsyncCall() {
    return (Interface, query, previousAnswers, callback) => {
      this.answers = previousAnswers;
      Interface.question(query, callback);
    }
  }

  callbackWithError() {
    return false;
  }

  onResult(answer) {
    this.answers.push(answer);
    return this.answers;
  }

}

module.exports = AnswersOfQuestionedInterface;
