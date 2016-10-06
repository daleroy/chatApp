import React from 'react';

const ChatApp = React.createClass({

  getInitialState: function () {
    return {};
  },

  render: function () {
    return (
      <div className='container-fluid'>

        <div className='row'>
          <div className='col-xs-4'>Buddy List</div>
          <div className='col-xs-8'>
              <div className='row'>
                  <div className='col-xs-4'>Buddy Message</div>
                  <div className='col-xs-4'>My Message</div>
              </div>
              <div className='row'>
                  <div className='col-xs-6'>Text Input</div>
                  <div className='col-xs-2'>Button</div>
              </div>
          </div>
        </div>

      </div>
    );
  }
});

export default ChatApp;
