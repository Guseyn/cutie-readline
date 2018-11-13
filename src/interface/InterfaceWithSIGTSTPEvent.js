'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represented result is interface
class InterfaceWithSIGTSTPEvent extends AsyncObject {

  constructor(interface, event) {
    super(interface, event);
  }

  // event is an Event with definedBody()
  definedSyncCall() {
    return (interface, event) => {
      interface.on('SIGTSTP', event);
      return interface;
    }
  }

}

module.exports = InterfaceWithSIGTSTPEvent;
