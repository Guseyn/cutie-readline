'use strict'

const { AsyncObject } = require('@cuties/cutie')

// Represented result is interface
class QuestionedInterface extends AsyncObject {
  constructor (Interface, query, event) {
    super(Interface, query, event)
  }

  // event is one time Event with body(answer)
  syncCall () {
    return (Interface, query, event) => {
      Interface.question(query, event)
      return Interface
    }
  }
}

module.exports = QuestionedInterface
