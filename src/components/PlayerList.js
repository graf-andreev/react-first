import React from 'react';
import Player from "./Player";

import DataTable from './DataTable';

class PlayerList extends React.Component{
  constructor(props){
    super(props);

    this.state ={
        dataList: null,
    }
}

componentDidMount(){
  const client = new DataTable();
  client.getPro()
        .then(data => this.setState({
          dataList: data
        }));
}

render() {
    const {dataList} = this.state;
    if(!dataList ){
      return <h1>Loading PRO</h1>
    }
    return (
      <div className="grid">
      {dataList.map(user => <Player key={user.name} user={user} />)}
      </div>
    )
  }
}
export default PlayerList;