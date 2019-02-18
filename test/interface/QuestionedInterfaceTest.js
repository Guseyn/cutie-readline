'use strict'

const { Event } = require('@cuties/cutie')
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')
const { ExitedProcess } = require('@cuties/process')
const { CreatedInterface, QuestionedInterface } = require('./../../index')
const Interface = require('readline').Interface

class AnswerEvent extends Event {
  constructor () {
    super()
  }

  definedBody (answer) {}
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
  new ExitedProcess(process, 0)
).call()
