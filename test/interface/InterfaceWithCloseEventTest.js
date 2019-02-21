'use strict'

const { as, Event } = require('@cuties/cutie')
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')
const { ExitedProcess } = require('@cuties/process')
const { CreatedInterface, ClosedInterface, InterfaceWithCloseEvent } = require('./../../index')
const Interface = require('readline').Interface

class CloseEvent extends Event {
  constructor () {
    super()
  }

  body () {}
}

new Assertion(
  new Is(
    new InterfaceWithCloseEvent(
      new CreatedInterface({
        input: process.stdin,
        output: process.stdout
      }).as('interface'), new CloseEvent()
    ), Interface
  )
).after(
  new ClosedInterface(as('interface')).after(
    new ExitedProcess(process, 0)
  )
).call()
