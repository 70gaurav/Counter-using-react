import { useState } from "react"


function Counter () {
    const [counter,setcounter] = useState(0)

    return (
        <>
        <button onClick = { ()=> setcounter(counter + 1)} >Increment</button>
        <p>{counter}</p>
        <button onClick = { ()=> setcounter(counter - 1)} >Decrement</button>
        </>
    )
    
}
export default Counter