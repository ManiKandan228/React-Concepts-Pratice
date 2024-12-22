import React from 'react'

const details =["Mani",22,"CSE"]
const RenderByLoop = () => {
    return (
        <div>
        <p>Hello This is example of Rendering By Looping</p>
        {details.map((item,index)=>(
          <p key={index}>{item}</p>
        ))}
        </div>
      )
}

export default RenderByLoop