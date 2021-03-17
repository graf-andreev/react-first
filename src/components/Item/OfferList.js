import React from 'react';
import Item from "./Item";
import ServerResponse from '../ServerResponse';
import UserContext from '../UserContext';
import withLoader from '../../HOC/withLoader';

class OfferList extends React.Component{

render() {
    const {data} = this.props;

    return (
      <div className="grid">
        <UserContext.Consumer>
          {
            showForGuest => data
                            .filter(item => !showForGuest || (item.showForGuest == showForGuest))
                            .map(user => <Item key={user.name} user={user} />)
          }
      </UserContext.Consumer>
      </div>
    )
  }
}
export default withLoader(OfferList, 'getData')