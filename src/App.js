import { useState } from 'react';
import './App.css'
function App(){
  let [counter,setCounter]=useState(0);
  let stock=9;
  const decnum=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
  }
  const incnum=()=>{
    if(counter<=stock){
      setCounter(counter+1)
    }
    }
 return(
  <>
   <div className='wrapper'>
   <h1>Counter App:</h1>
   <p>{counter}</p>
   <div className='btn-div'>
    <button className='minus' disabled={counter===0}
    onClick={decnum}>Decrement</button>
    <br></br>
    <button className='plus' disabled={counter===stock}
     onClick={incnum}>Increment</button>
   </div>
   
   </div>
  </>
  
 )
}
export default App