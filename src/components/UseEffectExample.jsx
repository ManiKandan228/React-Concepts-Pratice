import React, { useState,useEffect} from 'react'

const UseEffectExample = () => {

  const[count ,setCount]=useState(0);
  const[clicks,setClicks]=useState(0);

  useEffect(()=>{
    setClicks((prevClicks)=>prevClicks+1)
  },[count]);

  return (
    <div>
        <h1>useEffect Example</h1>
        <p>Count : {count}</p>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=> setCount(count-1)}>Decrease</button>
        <button onClick={()=> setCount(0)}>Reset</button>
        <p>Heyy !! {clicks} times Button Clicked</p>
    </div>
  )
}

export default UseEffectExample