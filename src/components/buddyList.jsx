import React from 'react';
import Buddy from './buddy.jsx';

const BuddyList = React.createClass({

  getInitialState: function () {
    return {buddies: ['Dave', 'Sisko']};
  },

  render: function () {
      let buddyNodes = [];

      this.state.buddies.forEach((name, index) => {
          buddyNodes.push(<div className='row' key={index}><Buddy name={name} /></div>);
      });

    return (
      <div className='col-xs-4'>
          {buddyNodes}
      </div>
    );
  }
});

export default BuddyList;
