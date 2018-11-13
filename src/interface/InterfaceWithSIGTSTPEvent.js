'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represented result is interface
class InterfaceWithSIGTSTPEvent extends AsyncObject {

  constructor(Interface, event) {
    super(Interface, event);
  }

  // event is an Event with definedBody()
  definedSyncCall() {
    return (Interface, event) => {
      Interface.on('SIGTSTP', event);
      return Interface;
    }
  }

}

module.exports = InterfaceWithSIGTSTPEvent;
