'use strict'

const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')
const Stream = require('stream')
const { StreamWithClearedLine } = require('./../index')

new Assertion(
  new Is(
    new StreamWithClearedLine(
      process.stdout,
      0
    ), Stream
  )
).call()
