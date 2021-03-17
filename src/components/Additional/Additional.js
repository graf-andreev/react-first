import React from 'react';

class Additional extends React.Component{
  render() {
    const {name, description, price, oldprice} = this.props;
    return (
      <>
      <p className="additional-item">{name}</p>
      <p className="additional-item">{description}</p>
      <p className="additional-item">{price}</p>
      <p className="additional-item">{oldprice}</p>
      </>
    )
  }
}

export default Additional;