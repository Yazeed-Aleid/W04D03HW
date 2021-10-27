import {useState} from "react";
import Counter from "./Counter";


function AddToFav  (){
    const [name,setName] = useState([]);
    const [add,setAdd] = useState("");
    
    // const[items,setItems] = useState([]);
    
    const listOfItems=() =>{
         
        let list = [...name]
        list.push(add)
        setName(list)
        console.log(name);
        setAdd("")
    
    }


    function remove(e) {
        let del = e.target.parentElement;
        console.log(e.target);
        del.remove()
        
        
    }

    return(
        
        <div>
        <h1 name>ToDo</h1> 
        <h1>What meed to be done</h1>
        
        {name.map((e , index)=>(
           <div>

          
           <li key = {index} >{e}</li>
            <Counter></Counter>
           <button onClick ={remove}>delete</button>
           
          
           </div>
           
           
        ))}
       
        <input type = 'text'  value ={add} onChange={(e)=>setAdd(e.target.value)} />
        <button onClick = {()=>listOfItems() }>Add</button>

        </div>
        
    )
}


export default AddToFav
