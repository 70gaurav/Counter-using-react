// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// function Home() {
//     const [item,setitem] = useState([])
//     const [cart,setcart] = useState([])
//     useEffect(() => {

//         localStorage.setItem("cartitem",JSON.stringify(cart))
    
//     },[cart])
//     useEffect(()=> {
//         axios.get("https://dummyjson.com/products")
//         .then((response) => {
//             console.log(response)
//             setitem(response.data.products)
//         } )
//     },[])
//     function addtocart (id) {
//         setcart([...cart,id])
//     }
//   return (
//     <div>
//         {
//             item.map((element,index) => {
//                 return (

//                     <div className='box' key={index}>
//                         <h1>cart{cart}</h1>
//                         <h1>{element.title}</h1>
//                         <img src={element.images[0]}></img>
//                         <a href='' onClick={(e)=>{e.preventDefault();addtocart(element.id)}}>add to cart</a>
//                     </div>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default Home