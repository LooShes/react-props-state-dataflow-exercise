import Article from "./Article";
import React, { Component } from 'react';

class Wardrobe2 extends Component {
  render() {
    let wardrobe = [
      { type: "shirt", color: "red", size: "Medium" },
      { type: "shirt", color: "blue", size: "Medium" },
      { type: "pants", color: "blue", size: "Medium" },
      { type: "accessory", color: "sapphire", size: "" },
      { type: "accessory", color: "lilac", size: "" },
    ]

    return wardrobe.filter(e=>e.color==="blue").map(e=>e=<Article info={e} key={e.color+e.type} />)
    }
}

export default Wardrobe2