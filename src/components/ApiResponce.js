import React from 'react';
import DataTable from './DataTable';

export default class ApiResponse extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            dataList: null,
        }
    }
    componentDidMount(){
        const client = new DataTable();
              client.getData()
              .then(response => response.records)
              .then(records => this.setState({
                  dataList: records.map(row => ({...row.fields, id: row.id}))
              }))
    }
    render() {
        const { dataList } = this.props;
        
        if( !dataList ){
            return <h1>Loading</h1>
        } 
            return dataList.map(item => <Item item={item}/>)
    }
}


class Item extends React.Component{
    render(){
        const {title, price, description} = this.props.item;

    return(
        <div>
            <p>{title}</p>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    )
    }
}