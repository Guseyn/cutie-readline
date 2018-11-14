'use strict'

const { as } = require('@cuties/cutie');
const { Assertion } = require('@cuties/assert');
const { Is } = require('@cuties/is');
const { ExitedProcess } = require('@cuties/process');
const { CreatedInterface, ClosedInterface, WrittenInterface } = require('./../../index');
const Interface = require('readline').Interface;

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
).call();
