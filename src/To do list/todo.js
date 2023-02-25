// import { useState } from "react"
// import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
// import EditIcon from '@mui/icons-material/Edit';

// export function Todo () {
//     const [input,setinput] = useState('')
//     const [list,setlist] = useState([])
//     function inputhandler (e) {
//         setinput(e.target.value)
//     }
//     function submithandler (e) {
//         e.preventDefault()
//             setlist([...list,input])
//             setinput("")
//     }
//     console.log(list)
//     return(
//         <>
//         <form onSubmit={submithandler}>
//             <input type="text" placeholder="Enter here" value={input} onChange = {inputhandler} ></input>
//             <button>click to add</button>
//         </form>
//         {list.map((element,index) => {
//             return <li>{element} <RemoveCircleOutlineIcon onClick ={} /></li>
//         })
//         }
//         </>
//     )
// }

