'use strict'

const { Assertion } = require('@cuties/assert');
const { Is } = require('@cuties/is');
const Stream = require('stream');
const { StreamWithCursorTo } = require('./../index');
const { ExitedProcess } = require('@cuties/process');

new Assertion(
  new Is(
    new StreamWithCursorTo(
      process.stdout //, 0, 0 
    ), Stream
  ).after(
    new ExitedProcess(process, 0)
  )
).call();
