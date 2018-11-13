'use strict'

// TODO: fix

const { as, Event } = require('@cuties/cutie');
const { Assertion } = require('@cuties/assert');
const { Is } = require('@cuties/is');
const { ExitedProcess } = require('@cuties/process');
const { EndedWritable } = require('@cuties/stream');
const { CreatedInterface, ClosedInterface, QuestionedInterface } = require('./../../index');
const Interface = require('readline').Interface;

class AnswerEvent extends Event {

  constructor() {
    super();
  }

  definedBody(answer) {
    console.log(answer);
    //new ExitedProcess(process, 0).call();
  }

}

new Assertion(
  new Is(
    new QuestionedInterface(
      new CreatedInterface({
        input: process.stdin,
        output: process.stdout
      }).as('interface'), 'query?', new AnswerEvent()
    ), Interface
  )
).after(
  //new EndedWritable(process.stdin, 'answer', 'utf8')
).call();
