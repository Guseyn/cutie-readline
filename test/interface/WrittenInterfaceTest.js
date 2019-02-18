'use strict'

const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')
const { ExitedProcess } = require('@cuties/process')
const { CreatedInterface, WrittenInterface } = require('./../../index')
const Interface = require('readline').Interface

new Assertion(
  new Is(
    new WrittenInterface(
      new CreatedInterface({
        input: process.stdin,
        output: process.stdout
      }).as('interface'), 'data\n'
    ), Interface
  )
).after(
  new ExitedProcess(process, 0)
).call()
