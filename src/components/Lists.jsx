import { useState, useEffect } from "react";

const List = ({getItems}) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        console.log('Updating Items');
        setItems(getItems(1));
    },[getItems]);
    return ( 
        <>
            {
                items.map((item) => {
                    return(
                    <div key={item}>
                        {item}
                    </div>
                     )
                })
            }
        </>
     );
}
 
export default List;