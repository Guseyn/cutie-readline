'use strict'

const { as } = require('@cuties/cutie')
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')
const { ExitedProcess } = require('@cuties/process')
const { CreatedInterface, ClosedInterface, StreamWithEmittedKeypressEvents } = require('./../index')
const Stream = require('stream')

new Assertion(
  new Is(
    new StreamWithEmittedKeypressEvents(
      process.stdin,
      new CreatedInterface({
        input: process.stdin,
        output: process.stdout
      }).as('interface')
    ), Stream
  )
).after(
  new ClosedInterface(as('interface')).after(
    new ExitedProcess(process, 0)
  )
).call()
