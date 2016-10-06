import React from 'react';
import BuddyList from './buddyList.jsx';
import MessageList from './messageList.jsx';
import MessageForm from './messageForm.jsx';
import styles from '../styles/styles.js';

const ChatApp = React.createClass({

  getInitialState: function () {
    return {};
  },

  componentDidMount: function() {
    const _this = this;

    window.socket.on('client id', function(clientId) {
      window.chatApp = {clientId};
      console.log(`clientId: ${clientId}`);
    });
  },

  render: function () {
    return (
      <div>
        <h1 className='text-center header'>Simple Chat Client</h1>
        <div>
          <div className='container'>
              <MessageList />
              <div className='messageFormContainer'>
                  <MessageForm />
              </div>
          </div>
        </div>
      </div>
    );
  }
});

export default ChatApp;
