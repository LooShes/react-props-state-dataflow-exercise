import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (<div id="register">
      There are reservations at {this.props.reservations.map(r=>r=<div key={r}>{r.day+r.time}</div>)}
    </div>)
  }
}

export default Register