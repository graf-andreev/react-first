import React from 'react';
import TabButtons from '../TabButtons/TabButtons';
import OfferList from '../Item/OfferList';
import PlayerList from '../Player/PlayerList';

class MainContent extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          buttons: [
            {
              isChecked: true,
              value: 'lfc'
            },
            {
              isChecked: false,
              value: 'pwp'
            },
          ],
          error: null,
        }
        
              this.onChange = this.onChange.bind(this);
      }


      onChange(event) {
        const value = event.target.value;
        this.setState(prevState => {
          return {
            buttons: prevState.buttons.map(btn => {
              const cloneBtn = {...btn, isChecked: false};
              if (cloneBtn.value === value) {
                cloneBtn.isChecked = true;
              }
              return cloneBtn;
            })
          };
        });
      }


    render(){
        const { buttons } = this.state;

        return(
            <>
            <TabButtons buttons={buttons} handler={this.onChange} />
            {buttons[0].isChecked && <OfferList/>}
            {buttons[1].isChecked && <PlayerList/>}
            </>
        )
    }
}


export default MainContent