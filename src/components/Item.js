import React from 'react';
import Additional from './Additional';

class Item extends React.Component{
  constructor(props){
    super(props);
    this.state = {isShow: true};
  }

  deleteItem(){
    this.setState(prevState => ({
      isShow: !prevState
    }));
  }

  showMore(){
    this.setState(prevState => ({
      isShow: !prevState
    }));
  }

  showPopup(){
    alert(this.props.user.name + ' Добавлен в корзину!')
  }
 

  render() {
    const { name, image, description, price, oldprice, game, counter, additional } = this.props.user;
    const { isShow } = this.state;

    if (isShow === true){
      return (
        <div className="item-card" onClick={() => this.showPopup()}>
          <p className="item-game">{game}</p>
          <img className="item-img" src = {image} />
          <p className="item-card__header">{name}</p>  
          <p>{description}</p>     
          <div className="price-wrapper">
            <p className="price">{price}</p>
            <p className="oldprice">{oldprice}</p>  
          </div> 
          {counter > 1000 && <p className="counter">Популярно! купили более {counter} раз!</p>}
          {additional.slice(0,1).map((add, index) => <Additional key={index} name={add.name} description={add.description} price={add.price} oldprice={add.oldprice} />)}
          {additional.length > 2 && <button onClick={() => this.showMore()}>Показать больше</button>}
          <button onClick={() => this.deleteItem()}>Удалить</button>
        </div>
      );
    } else {
      return null
    }
    
  }
}

export default Item