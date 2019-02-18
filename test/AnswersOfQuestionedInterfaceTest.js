'use strict'

const { Assertion } = require('@cuties/assert')
const { IsArray } = require('@cuties/is')
const { AnswersOfQuestionedInterface } = require('./../index')

// Make Interface testable
class FakeInterface {
  constructor () {}

  question (query, callback) {
    console.log(query)
    callback(`answer on ${query}`)
  }
}

const Interface = new FakeInterface()

new Assertion(
  new IsArray(
    new AnswersOfQuestionedInterface(
      Interface, 'query3?',
      new AnswersOfQuestionedInterface(
        Interface, 'query2?',
        new AnswersOfQuestionedInterface(
          Interface, 'query1?'
        )
      )
    )
  )
).call()
