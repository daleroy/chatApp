import React from 'react';

const MessageInput = React.createClass({

  getInitialState: function () {
    return {messageInputValue: ''};
  },

  handleChange: function(e) {
    this.setState({messageInputValue: e.target.value});
  },

  render: function () {
    return (
        <input
            type='text'
            name='message'
            autoComplete='off'
            placeholder='Enter message...'
            value={this.state.messageInputValue}
            onChange={this.handleChange}
        />
    );
  }
});

export default MessageInput;
