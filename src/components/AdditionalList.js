import React from 'react';
import Additional from './Additional';

class AdditionalList extends React.Component{

        constructor(props){
            super(props);
            this.state ={
                showAll: false,
            }
        }
        
        showMore(){
            this.setState({
                showAll: true,
            });
        }

        render(){
    
        const { additional } = this.props;
        const {showAll} = this.state;
        const slice = showAll ? additional.length : 2;
        
        return(
            <>
            {additional.slice(0, slice).map((add, index) => <Additional key={index} name={add.name} description={add.description} price={add.price} oldprice={add.oldprice}/>)}
            {additional.length > 2 && <button onClick={()=> this.showMore()}>Показать больше</button>}
            </>
        )

    }
}
export default AdditionalList