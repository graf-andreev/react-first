import React from 'react';

import offerList from '../data/offerList.json';
import Item from "./Item";

class OfferList extends React.Component{
  render() {
    return offerList.map(user => <Item key={name} user={user} />)
  }
}

export default OfferList;