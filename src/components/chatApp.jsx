import React from 'react';
import BuddyList from './buddyList.jsx';
import MessageList from './messageList.jsx';
import MessageForm from './messageForm.jsx';

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
      <div className='container-fluid'>
        <div className='row'>
          <BuddyList />
          <div className='col-xs-8'>
              <MessageList />
              <div className='row'>
                  <MessageForm/>
              </div>
          </div>
        </div>
      </div>
    );
  }
});

export default ChatApp;
