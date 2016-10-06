import React from 'react';

const Message = React.createClass({

  getInitialState: function () {
    return {};
  },

  render: function () {
      return (
          <div className='row'>
              <div>{this.props.message}</div>
              <div>{this.props.timeStamp}</div>
          </div>
      );
  }
});

export default Message;
