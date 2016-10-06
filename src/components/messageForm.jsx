import React from 'react';
import MessageInput from './messageInput.jsx';
import MessageSendButton from './messageSendButton.jsx';

const MessageForm = React.createClass({

  getInitialState: function () {
    return {};
  },

  handleOnSubmit: function(e) {
    const message = this.messageInput ? this.messageInput.state.messageInputValue : '';

    e.preventDefault();

    window.socket.emit('chat message', message);

    this.messageInput.setState({messageInputValue: ''}); 
    return false;
  },

  render: function () {
    return (
        <form onSubmit={this.handleOnSubmit}>
            <MessageInput ref={(ref) => this.messageInput = ref} />
            <MessageSendButton />
        </form>
    );
  }
});

export default MessageForm;
