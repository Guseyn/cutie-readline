'use strict'

const { as, Event } = require('@cuties/cutie')
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')
const { ExitedProcess } = require('@cuties/process')
const { CreatedInterface, ClosedInterface, InterfaceWithLineEvent } = require('./../../index')
const Interface = require('readline').Interface

class LineEvent extends Event {
  constructor () {
    super()
  }

  definedBody (input) {}
}

new Assertion(
  new Is(
    new InterfaceWithLineEvent(
      new CreatedInterface({
        input: process.stdin,
        output: process.stdout
      }).as('interface'), new LineEvent()
    ), Interface
  )
).after(
  new ClosedInterface(as('interface')).after(
    new ExitedProcess(process, 0)
  )
).call()
