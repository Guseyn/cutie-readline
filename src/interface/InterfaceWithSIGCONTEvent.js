'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represented result is interface
class InterfaceWithSIGCONTEvent extends AsyncObject {

  constructor(interface, event) {
    super(interface, event);
  }

  // event is an Event with definedBody()
  definedSyncCall() {
    return (interface, event) => {
      interface.on('SIGCONT', event);
      return interface;
    }
  }

}

module.exports = InterfaceWithSIGCONTEvent;
