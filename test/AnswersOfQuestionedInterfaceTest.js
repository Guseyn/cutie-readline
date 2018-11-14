'use strict'

const { as, AsyncObject } = require('@cuties/cutie');
const { Assertion } = require('@cuties/assert');
const { IsArray } = require('@cuties/is');
const { ExitedProcess } = require('@cuties/process');
const { CreatedInterface, ClosedInterface, AnswersOfQuestionedInterface } = require('./../index');
const Interface = require('readline').Interface;

// To test this file you must do it manually,
// run node test/AnswersOfQuestionedInterfaceTest.js and uncomment .call()

class LoggedAnswers extends AsyncObject {

  constructor(answers) {
    super(answers);
  }

  definedSyncCall() {
    return (answers) => {
      console.log(answers);
      return answers;
    }
  }

}

new CreatedInterface({
  input: process.stdin,
  output: process.stdout
}).as('interface').after(
  new Assertion(
    new IsArray(
      new LoggedAnswers(
        new AnswersOfQuestionedInterface(
          as('interface'), 'query3?',
          new AnswersOfQuestionedInterface(
            as('interface'), 'query2?',
            new AnswersOfQuestionedInterface(
              as('interface'), 'query1?'
            )
          )
        )
      )
    )
  ).after(
    new ExitedProcess(process, 0)
  )
)//.call();
