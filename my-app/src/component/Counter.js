import {useState} from "react";


function Counter(params) {
    const [counter,setCounter] = useState(0);
    
    
    let plus = ()=> {setCounter(counter+ 1)} 
    let min = () => {setCounter(counter- 1)} 

    return(
        <div>
        <button onClick = {plus}>+</button>
        <h3 id = 'counter'>{counter}</h3>
        <button onClick={min}>-</button>
        </div>
    )
}export default Counter
