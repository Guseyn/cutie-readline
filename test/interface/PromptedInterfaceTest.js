'use strict'

const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')
const { PromptedInterface } = require('./../../index')

// Make Interface testable
class FakeInterface {
  constructor () {}

  prompt (preserveCursor) {
    return preserveCursor
  }
}

const Interface = new FakeInterface()

new Assertion(
  new Is(
    new PromptedInterface(
      Interface, true
    ), FakeInterface
  )
).call()
