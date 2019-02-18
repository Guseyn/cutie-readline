'use strict'

const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')
const Stream = require('stream')
const { StreamWithClearedScreenDown } = require('./../index')

new Assertion(
  new Is(
    new StreamWithClearedScreenDown(
      process.stdout
    ), Stream
  )
).call()
