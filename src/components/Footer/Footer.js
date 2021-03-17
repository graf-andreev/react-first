import React, { Component } from 'react';
import styles from '../../styles/style.css'

class Footer extends Component{

  render() {
    return (
    <div className="footer">
      <p className="logo">LegionFarm</p>
      <div className="wrapper">
        <p>88005553535</p>
        <p>Напишите нам</p>
        <p>lfcarry@mail.ru</p>
      </div>
    </div>
    )
  }
}

export default Footer;