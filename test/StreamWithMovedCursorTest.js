'use strict'

const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')
const Stream = require('stream')
const { StreamWithMovedCursor } = require('./../index')
const { ExitedProcess } = require('@cuties/process')

new Assertion(
  new Is(
    new StreamWithMovedCursor(
      process.stdout, 0, 0
    ), Stream
  ).after(
    new ExitedProcess(process, 0)
  )
).call()
