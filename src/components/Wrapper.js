import React from 'react';
import GetPlayers from './GetPlayers';
import TabButtons from './TabButtons'

class Wrapper extends React.Component {
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
          }
        })
      }

    render() {
        const { buttons } = this.state;
        const  {children } = this.props;

        return(
        <>
        <TabButtons buttons={buttons} handler={this.onChange} />
        <div className="grid">{children}</div>
        </>
        )
    }
}

export default Wrapper;