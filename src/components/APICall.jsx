import React ,{useState,useEffect}from 'react'
// import { data } from 'react-router-dom';
import axios from 'axios';

const APICall = () => {

    const[data,setData]=useState(null);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);

useEffect(()=>{
    // fetch('https://jsonplaceholder.typicode.com/posts')
    axios.get('https://jsonplaceholder.typicode.com/posts')

    // .then((response)=>{
    //     if(!response.ok)
    //     {
    //         throw new Error('Network error')
    //     }
    //     return response.json()
    // })

    .then((response)=>{
        setData(response.data);
        setLoading(false);
    })

    .catch((error)=>{
        setError(error);
        setLoading(false);
    });

},[]);

if(loading) return <h2>Loading pls wait</h2>;
if(error)   return <h2>{`Error :${error.message}`}</h2>;

  return (
    <div>
        <h2>Fetched Data</h2>
        <ul>
            {data && data.map((item)=>(
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
  );
}

export default APICall