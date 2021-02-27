import React from 'react';
import Item from "./Item";
import DataTable from './DataTable';
import UserContext from './UserContext';

class OfferList extends React.Component{
  constructor(props){
    super(props);

    this.state ={
        dataList: null,
    }
}

componentDidMount(){
  const client = new DataTable();
  client.getData()
        .then(data => this.setState({
          dataList: data
        }))

}


render() {
    const {dataList} = this.state;

    if(!dataList ){
      return <h1>Loading</h1>
    }
    return (
      <div className="grid">
        <UserContext.Consumer>
          {
            showForGuest => dataList
                            .filter(item => !showForGuest || (item.showForGuest == showForGuest))
                            .map(user => <Item key={user.name} user={user} />)
          }
      </UserContext.Consumer>
      </div>
    )
  }
}
export default OfferList;