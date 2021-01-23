import React from 'react';
import ReactDOM from 'react-dom';
import ModalInfo from "./ModalInfo";

class Modal extends React.Component {
  render() {
    return ReactDOM.createPortal(
       <ModalInfo name="Modal" />,
      document.getElementById('root-modal'),
    )
  }
}

export default Modal;