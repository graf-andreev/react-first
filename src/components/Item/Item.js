import React, {useState} from 'react';
import AdditionalList from '../AdditionalList/AdditionalList';
import Modal from '../Modal/Modal';

const Item = (props) =>{

  const [isShow, setIsShow] = useState(true);
  const [showModal, setShowModal] = useState(false);

    if (isShow){
      return (
        <div className="item-card">
          <p className="item-game">{props.user.game}</p>
          <img className="item-img" src = {props.user.image} />
          <p className="item-card__header">{props.user.name}</p>
          <p>{props.description}</p>
          <div className="price-wrapper">
            <p className="price">{props.user.price}</p>
            <p className="oldprice">{props.user.oldprice}</p>
          </div>
          {props.user.counter > 1000 && <p className="counter">Популярно! купили более {props.user.counter} раз!</p>}
          <AdditionalList additional={props.user.additional} />
          <button onClick={() => setIsShow(!isShow)}>Удалить</button>

          <button onClick={() => setShowModal(!showModal)}>Добавить в корзину</button>
            {showModal ? (
                  <Modal>
                     <p className="popup-text">{props.user.name + 'Добавлен в корзину'}</p>
                  </Modal>
               ) : null
            }

        </div>
      );
    } else {
      return null
    }

  }

export default Item