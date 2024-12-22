import React from 'react'

const isLogged=true
const ConditionalRender = () => {
    let message="";
    if(isLogged){
        message=<p>Welcome you are logged in</p>
    }
    else{
        message=<p>Please Sign in First</p>
    }
  return (
    <div>
        <p>Conditional Rendering Example</p>
        {message}
    </div>
  )
}

export default ConditionalRender