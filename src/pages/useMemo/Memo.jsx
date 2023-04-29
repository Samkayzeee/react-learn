import { useState, useMemo } from "react";


const LearnUseMemo = () => {
    const [number, setNumber ] = useState(0);
    const [dark, setDark] = useState(false);

    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number]);

    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
    return ( 
        <>
            <input type="number" name="" id="" value={number} onChange={(e) => {setNumber(e.target.value)}}/>
            <button onClick={() => {setDark(dark ? false : true)}}>change Theme</button>
            <div style={themeStyles}> {doubleNumber} </div>
        </>
     );
}
const slowFunction = (num) => {
    console.log('calling slow function');
    for (let i = 0; i <= 100000000000; i++) {
        return num * 2
    }
}
export default LearnUseMemo;