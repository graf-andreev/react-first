import React from 'react';

import additional from '../data/offerList.json';

class Additional extends React.Component{
  render() {
    const {name, description, price, oldprice} = this.props;
    
    return (
      <>
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
      <p>{oldprice}</p>
      </>
    )
  }
}

export default Additional;