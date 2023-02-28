import React, { useEffect, useState } from 'react'
import axios from 'axios'


 function Axios() {
    const [data,setdata] = useState([])
   useEffect(() => {
    axios.get("https://dummyjson.com/products")
    .then((response)=>{
        console.log(response.data)
        setdata(response.data.products)

    })
   },[])
  return (
    <>
        {
            data.map((element,index) => {
               return (
                <div key={index}>
               <h1>{element.title}</h1>
               <img  src={element.images[0]}></img>
               <p>{element.description}</p>
               </div>
               
               )
            
            })
        }
    </>
  )
}


export default Axios