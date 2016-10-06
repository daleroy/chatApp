import React from 'react';
import Message from './message.jsx';

const MessageList = React.createClass({

  getInitialState: function () {
    return {
        messages: [
            {
                sender: 'Dave',
                message: 'Hello',
                timeStamp: Date.now()
            },
            {
                sender: 'Sisko',
                message: 'Well Hello!',
                timeStamp: Date.now()
            },
        ]
    };
  },

  render: function () {
      let messageNodes = [];

      this.state.messages.forEach((message, index) => {
          messageNodes.push(
              <div className='row' key={index}>
                  <Message sender={message.sender} 
                           message={message.message}
                           timeStamp={message.timeStamp}
                  />
              </div>
          );
      }); 

      return (<div>{messageNodes}</div>);
  }
});

export default MessageList;
