'use strict'

const { as } = require('@cuties/cutie');
const { Assertion } = require('@cuties/assert');
const { Is } = require('@cuties/is');
const { ExitedProcess } = require('@cuties/process');
const { CreatedInterface, ClosedInterface, PausedInterface } = require('./../../index');
const Interface = require('readline').Interface;

new Assertion(
  new Is(
    new PausedInterface(
      new CreatedInterface({
        input: process.stdin,
        output: process.stdout
      })
    ).as('interface'), Interface
  )
).after(
  new ClosedInterface(as('interface')).after(
    new ExitedProcess(process, 0)
  )
).call();
