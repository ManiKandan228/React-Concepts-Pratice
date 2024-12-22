import React from 'react'

const list=["Mani","Aishwarya","Mahesh"]
const ListandKeys = () => {
  return (
    <div>
        <p>This is the List</p>
        {list.map((item,index)=>(
            <p key={index}>{item}</p>
        ))}
    </div>
  )
}

export default ListandKeys