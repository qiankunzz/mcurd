/**
 * Book model events
 */

'use strict';

import {EventEmitter} from 'events';
var Book = require('../../sqldb').Book;
var BookEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
BookEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Book.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    BookEvents.emit(event + ':' + doc._id, doc);
    BookEvents.emit(event, doc);
    done(null);
  }
}

export default BookEvents;
