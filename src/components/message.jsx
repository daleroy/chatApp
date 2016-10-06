import React from 'react';

const Message = React.createClass({

  getInitialState: function () {
    return {};
  },

  render: function () {
      const containerClass = this.props.isSelf ? 'messageContainer self' : 'messageContainer buddy';
      return (
          <div className={containerClass}>
              <div className='message'>{this.props.message}</div>
              <div className='timeStamp'>{this.props.timeStamp}</div>
          </div>
      );
  }
});

export default Message;
