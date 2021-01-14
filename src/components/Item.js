import React from 'react';
import Additional from './Additional';

class Item extends React.Component{
  render() {
    const { name, image, description, price, oldprice, game, counter, additional } = this.props.user;

    return (
      <div className="item-card">
        <p className="item-game">{game}</p>
        <img className="item-img" src = {image} />
        <p className="item-card__header">{name}</p>  
        <p>{description}</p>     
        <div className="price-wrapper">
          <p className="price">{price}</p>
          <p className="oldprice">{oldprice}</p>  
        </div> 
        {counter > 1000 && <p className="counter">Популярно! купили более {counter} раз!</p>}
        { additional.map((add, index) => <Additional key={index} name={add.name}/>)}
      </div>
    );
  }
}

export default Item