import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {
    render() {
        return( 
        <div>
            <h4>Store</h4>
            <p>{this.props.store.map((e, index)=>e=<Item key={index} item={e.item} discount={this.props.discount} price={e.price} />)}</p>
        </div>
        )
    }
}

export default Home