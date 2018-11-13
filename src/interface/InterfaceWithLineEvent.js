'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represented result is interface
class InterfaceWithLineEvent extends AsyncObject {

  constructor(Interface, event) {
    super(Interface, event);
  }

  // event is an Event with definedBody(input)
  definedSyncCall() {
    return (Interface, event) => {
      Interface.on('line', event);
      return Interface;
    }
  }

}

module.exports = InterfaceWithLineEvent;
