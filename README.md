# cutie-readline

[![NPM Version][npm-image]][npm-url]

[Cutie](https://github.com/Guseyn/cutie-readline) extension for <b>readline</b> module in Node. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

# Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-readline/tree/master/test).

# Usage

```js
const {
  // Needed async objects here from the table below
} = require('@cuties/readline');
```
For more information about parameters in the async objects visit [docs of Node](https://nodejs.org/en/docs/) for <b>readline</b> module.

## interface

| Async Object | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | --------------- | ---------- | --------------------- |
| `ClosedInterface` | `Interface.close` | `Interface` | `Interface` |
| `CreatedInterface` | `readline.createInterface` | `Interface, options` | `Interface` |
| `InterfaceWithCloseEvent` | `Interface.on('close', event)` | `Interface, event(Event with definedBody())` | `Interface` |
| `InterfaceWithLineEvent` | `Interface.on('line', event)` | `Interface, event(Event with definedBody(input))` | `Interface` |
| `InterfaceWithPauseEvent` | `Interface.on('pause', event)` | `Interface, event(Event with definedBody())` | `Interface` |
| `InterfaceWithPrompt` | `Interface.setPrompt` | `prompt` | `Interface` |
| `InterfaceWithResumeEvent` | `Interface.on('resume', event)` | `Interface, event(Event with definedBody())` | `Interface` |
| `InterfaceWithSIGCONTEvent` | `Interface.on('SIGCONT', event)` | `Interface, event(Event with definedBody())` | `Interface` |
| `InterfaceWithSIGINTEvent` | `Interface.on('SIGINT', event)` | `Interface, event(Event with definedBody())` | `Interface` |
| `InterfaceWithSIGTSTPEvent` | `Interface.on('SIGTSTP', event)` | `Interface, event(Event with definedBody())` | `Interface` |
| `PausedInterface` | `Interface.pause` | `Interface` | `Interface` |
| `PromptedInterface` | `Interface.prompt` | `Interface[, preserveCursor]` | `Interface` |
| `QuestionedInterface` | `Interface.question` | `Interface, query, event(Event with definedBody(answer))` | `Interface` |
| `ResumedInterface` | `Interface.resume` | `Interface` | `Interface` |
| `WrittenInterface` | `Interface.write` | `Interface, data[, key]` | `Interface` |

## stream and other structures

| Async Object | Async/sync call | Parameters(default value/description) | Representation result |
| ------------ | -------------- | ---------- | --------------------- |
| `AnswersOfQuestionedInterface` | `Interface.question` | `Interface, query[, previousAnswers(is AnswersOfQuestionedInterface or string[])]` | `string[]` |
| `StreamWithClearedLine` | `readline.clearLine` | `stream, dir` | `stream` |
| `StreamWithClearedScreenDown` | `readline.clearScreenDown` | `stream` | `stream` |
| `StreamWithCursorTo` | `readline.streamWithCursorTo` | `stream, x, y` | `stream` |
| `StreamWithEmittedKeypressEvents` | `readline.emitKeypressEvents` | `stream[, interface]` | `stream` |
| `StreamWithMovedCursor` | `readline.moveCursor` | `stream, dx, dy` | `stream` |

[npm-image]: https://img.shields.io/npm/v/@cuties/readline.svg
[npm-url]: https://npmjs.org/package/@cuties/readline
