import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import {* as assign} from 'object-assign';

let message = null;

function setMessage(receivedMessage) {
  message = receivedMessage;
}

function emitChange() {
  MessageStore.emit('change');
}

let MessageStore = assign({}, EventEmitter.prototype, {

  addChangeListener: function (callback) {
    this.on('change', callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  },

  getMessage: function () {
    return message;
  }

});

function handleAction(action) {
  if (action.type === 'receive_message') {
    setMessage(action.message);
    emitChange();
  }
}

MessageStore.dispatchToken = AppDispatcher.register(handleAction);

export default MessageStore;
