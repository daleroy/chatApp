import React from 'react';
import MessageInput from './messageInput.jsx';
import MessageSendButton from './messageSendButton.jsx';

const MessageForm = React.createClass({

  getInitialState: function () {
    return {};
  },

  render: function () {
    return (
        <form>
            <MessageInput />
            <MessageSendButton />
        </form>
    );
  }
});

export default MessageForm;
