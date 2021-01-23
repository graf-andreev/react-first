import React from 'react';

class ModalInfo extends React.Component{
  render() {
    const {showModal} = this.props;
    return (
      <>
      {showModall && <div>123</div>}
      </>
    )
  }
}

export default ModalInfo;