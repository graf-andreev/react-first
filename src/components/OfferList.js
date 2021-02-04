import React from 'react';

import offerList from '../data/offerList.json';
import Item from "./Item";

import DataTable from './DataTable';

const client = new DataTable();
client.getData()
      .then(console.log)

class OfferList extends React.Component{
  render() {
    return offerList.map(user => <Item key={user.name} user={user} />)
  }
}
export default OfferList;