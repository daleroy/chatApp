import React from 'react';

const MessageInput = React.createClass({

  getInitialState: function () {
    return {};
  },

  render: function () {
    return (<input type='text' name='message' placeholder='Enter message...'/>);
  }
});

export default MessageInput;
