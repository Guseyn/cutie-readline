'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represented result is interface
class InterfaceWithCloseEvent extends AsyncObject {

  constructor(interface, event) {
    super(interface, event);
  }

  // event is an Event with definedBody()
  definedSyncCall() {
    return (interface, event) => {
      interface.on('close', event);
      return interface;
    }
  }

}

module.exports = InterfaceWithCloseEvent;
