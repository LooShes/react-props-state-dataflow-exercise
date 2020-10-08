import React, { Component } from 'react';

class Landing extends Component {
    render() {
        return( 
        <div>
            <h1>Welcome, {this.props.user}!</h1>
            <p>The hotest item is the store is: {this.props.store[0].item} for ${this.props.store[0].price}</p>
        </div>
        )
    }
}

export default Landing