import React from 'react';
import Player from "./Player";
import Form from '../Form/Form';
import withLoader from '../../HOC/withLoader';

class PlayerList extends React.PureComponent{

render() {
    const {data} = this.props;
    if(!data ){
      return <h1>Loading PRO</h1>
    }
    return (
      <>
      <div className="grid">
      {data.map(user => <Player key={user.name} user={user} />)}
      </div>
      <Form/>
      </>
    )
  }
}

export default withLoader(PlayerList, 'getPro');