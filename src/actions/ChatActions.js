import AppDispatcher from '../dispatcher/AppDispatcher';

function receiveMessage(message) {

    const action = {
        type: 'receive_message',
        message
    };

    AppDispatcher.dispatch(action);
}

export default receiveMessage;
