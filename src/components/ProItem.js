import React from 'react';

class ProItem extends React.Component{
  
  render() {
    const { name, photo, winrate, game, status} = this.props.user;

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
          <AdditionalList additional={additional} showAll={showAll}/>
          <button onClick={() => this.deleteItem()}>Удалить</button>
          
          <button onClick={() => this.toggleModal()}>Добавить в корзину</button>
            {showModal ? (
                  <Modal>
                     <p className="popup-text">{this.props.user.name + 'Добавлен в корзину'}</p>
                  </Modal>
               ) : null
            }
          
        </div>
      );
    }
  }
}

export default ProItem