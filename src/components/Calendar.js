import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return (
      <div id="calendar">
        {this.props.reservations.map(r=>r=<div key={r}>{r.name} has reservation on {r.day+r.time}</div>)}
      </div>
    )
  }
}

export default Calendar