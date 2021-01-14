import React from 'react';

import additional from '../data/offerList.json';

class Additional extends React.Component{
  render() {
    const {name} = this.props;
    
    return (
      <p>{name}</p>
    )
  }
}

export default Additional;