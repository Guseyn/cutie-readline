'use strict'

const { as, Event } = require('@cuties/cutie');
const { Assertion } = require('@cuties/assert');
const { Is } = require('@cuties/is');
const { ExitedProcess } = require('@cuties/process');
const { CreatedInterface, ClosedInterface, InterfaceWithSIGINTEvent } = require('./../../index');
const Interface = require('readline').Interface;

class SIGINTEvent extends Event {

  constructor() {
    super();
  }

  definedBody() {}

}

new Assertion(
  new Is(
    new InterfaceWithSIGINTEvent(
      new CreatedInterface({
        input: process.stdin,
        output: process.stdout
      }).as('interface'), new SIGINTEvent()
    ), Interface
  )
).after(
  new ClosedInterface(as('interface')).after(
    new ExitedProcess(process, 0)
  )
).call();
