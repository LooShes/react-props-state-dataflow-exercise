import React, { Component } from 'react';

class Hudini extends Component {
    constructor() {
        super()

        this.state = {
            show: true
        }
    }

    render() {
        return <div>{this.state.show ? "Now you see me" : "Now you don't see me"}</div>
    }
}

export default Hudini