import React, { Component } from 'react';
import styles from '../styles/style.css'

class Header extends Component{

  render() {
    return (
    <div className="header">
      <p className="logo">LegionFarm</p>
      <div className="wrapper">
        <p>Контакты</p>
        <p>О нас</p>
        <p>Войти</p>
      </div>
    </div>
    )
  }
}

export default Header;