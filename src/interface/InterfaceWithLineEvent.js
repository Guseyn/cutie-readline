'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represented result is interface
class InterfaceWithLineEvent extends AsyncObject {

  constructor(interface, event) {
    super(interface, event);
  }

  // event is an Event with definedBody(input)
  definedSyncCall() {
    return (interface, event) => {
      interface.on('line', event);
      return interface;
    }
  }

}

module.exports = InterfaceWithLineEvent;
