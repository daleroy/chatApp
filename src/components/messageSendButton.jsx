import React from 'react';

const MessageSendButton = React.createClass({

  getInitialState: function () {
    return {};
  },

  render: function () {
    return (<button className='messageButton' type='submit'>Submit</button>);
  }
});

export default MessageSendButton;
