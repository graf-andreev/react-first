import React, {useState} from 'react';
import Additional from '../Additional/Additional';

const AdditionalList = (props) =>{
    const [showAll, setShowAll] = useState(false);

        const slice = showAll ? props.additional.length : 2;

        return(
            <>
            {props.additional.slice(0, slice).map((add, index) => <Additional key={index} name={add.name} description={add.description} price={add.price} oldprice={add.oldprice}/>)}
            {props.additional.length > 2 && <button onClick={()=> setShowAll(!showAll)}>Показать больше</button>}
            </>
        )

    }
export default AdditionalList