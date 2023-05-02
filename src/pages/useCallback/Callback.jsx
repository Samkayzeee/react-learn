import { useState, useCallback } from "react";
import List from "../../components/Lists";



const LearnUseCallback = () => {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const getItems = useCallback((incre) => {
        return [number, number + incre, number + incre + 1]
    }, [number]);

    const theme = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
    return ( 
        <>
            <div style={theme}>
                <input type="number" name="" id="" value={number} onChange={(e) => {setNumber(parseInt(e.target.value))}}/>

                <button onClick={() => setDark(dark ? false : true)}>Toggle Theme</button>

                <List getItems = {getItems} />
            </div>
        </>
     );
}
 
export default LearnUseCallback;