import React from 'react';
import AdditionalList from './AdditionalList';
import Modal from './Modal';

class Item extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isShow: true,
      showAll: false,
      modalShow: false,
    };
    
  }

  modalShow(){
    this.setState(prevState => ({
      modalShow: true,
    }));
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
 

  render() {
    const { name, image, description, price, oldprice, game, counter, additional } = this.props.user;
    const { isShow, showAll, modalShow } = this.state;

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
          <AdditionalList additional={additional} showAll={showAll}/>
          <button onClick={() => this.deleteItem()}>Удалить</button>
          <button onClick={() => this.modalShow()}>Добавить в корзину</button>
          {/* <Modal showModal={showModal}/> */}
        </div>
      );
    } else {
      return null
    }
    
  }
}

export default Item