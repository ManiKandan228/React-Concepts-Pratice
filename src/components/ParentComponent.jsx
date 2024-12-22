import React from 'react'
import Childcomponent from './Childcomponent'

const ParentComponent = () => {
  return (
    <div>
        <Childcomponent name="Mani"/>
        <Childcomponent name="Aishwarya"/>
    </div>
  )
}

export default ParentComponent