import React from 'react';
import Message from './message.jsx';
import styles from '../styles/styles.js';

const MessageList = React.createClass({

  getInitialState: function() {
    return {messages: []};
  },

  componentDidMount: function() {
    const _this = this;
    window.socket.on('chat message', function(msg){
      _this.setState(
        {
          messages: _this.state.messages.concat([{
            sender: msg.sender,
            message: msg.message,
            timeStamp: msg.timeStamp
          }])
        });
    });
  },

  render: function() {
      let messageNodes = [];

      this.state.messages.forEach((message, index) => {
          const isSelf = window.chatApp.clientId === message.sender;

          messageNodes.push(
              <div className='row' key={index}>
                  <Message sender={message.sender} 
                           message={message.message}
                           timeStamp={message.timeStamp}
                           isSelf={isSelf}
                  />
              </div>
          );
      }); 

      return (<div className='messageList'>{messageNodes}</div>);
  }
});

export default MessageList;
