import React from 'react';

class Player extends React.Component{

  render() {
    const { name, photo, game, winrate, status } = this.props.user;
    return(
        <div className="pro">
            <p className="pro-status">{status}</p>
            <img className="pro-img" src={photo} alt="" />
            <p className="pro-name">{name}</p>
            <p className="pro-game">Game: {game}</p>
            <p className="pro-winrate">Процент побед: {winrate}%</p>
        </div>
    )
  } 
}

export default Player