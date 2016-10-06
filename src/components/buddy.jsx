import React from 'react';

const Buddy = React.createClass({

  getInitialState: function () {
    return {};
  },

  render: function () {
    return (
      <div>{this.props.name}</div>
    );
  }
});

export default Buddy;
