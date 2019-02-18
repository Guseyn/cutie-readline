'use strict'

const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')
const { ExitedProcess } = require('@cuties/process')
const { CreatedInterface, ClosedInterface } = require('./../../index')
const Interface = require('readline').Interface

new Assertion(
  new Is(
    new ClosedInterface(
      new CreatedInterface({
        input: process.stdin,
        output: process.stdout
      })
    ), Interface
  )
).after(
  new ExitedProcess(process, 0)
).call()
