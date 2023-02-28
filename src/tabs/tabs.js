import React, { useState } from 'react'
import "./tabs.css"

function Tabs() {
    const [active,setactive] = useState(0)
    function handlechange (count) {
        setactive(count)
    }
    return (
        <div id="wrapper">
            <div id="tabs">
                <div class="anchors">
                    <a class="active" href="" onClick={(e)=>{e.preventDefault();handlechange(0)}} className={active===0 ? "active" : ""}>HTML</a>
                    <a href="" onClick={(e)=>{e.preventDefault();handlechange(1)}} className={active===1 ? "active" : ""} >CSS</a>
                    <a href="" onClick={(e)=>{e.preventDefault();handlechange(2)}} className={active===2 ? "active" : ""} >JS</a>
                    <a href="" onClick={(e)=>{e.preventDefault();handlechange(3)}} className={active===3 ? "active" : ""}>React</a>
                    <a href="" onClick={(e)=>{e.preventDefault();handlechange(4)}} className={active===4 ? "active" : ""}>Node</a>
                </div>
                <div class="content">
                    <div class="con active"className={active===0 ? "con active" : "con"} >
                        <h3>HTML</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam pariatur corrupti impedit accusantium quo eos maiores? Ex quia laboriosam quo commodi laborum ullam perferendis, nihil aliquam accusamus totam. Velit, molestias?</p>
                    </div>
                    <div class="con" className={active===1 ? "con active" : "con"}>
                        <h3>CSS</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam pariatur corrupti impedit accusantium quo eos maiores? Ex quia laboriosam quo commodi laborum ullam perferendis, nihil aliquam accusamus totam. Velit, molestias?</p>
                    </div>
                    <div class="con" className={active===2 ? "con active" : "con"}>
                        <h3>JS</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam pariatur corrupti impedit accusantium quo eos maiores? Ex quia laboriosam quo commodi laborum ullam perferendis, nihil aliquam accusamus totam. Velit, molestias?</p>
                    </div>
                    <div class="con" className={active===3 ? "con active" : "con"}>
                        <h3>React</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam pariatur corrupti impedit accusantium quo eos maiores? Ex quia laboriosam quo commodi laborum ullam perferendis, nihil aliquam accusamus totam. Velit, molestias?</p>
                    </div>
                    <div class="con" className={active===4 ? "con active" : "con"}>
                        <h3>Node</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam pariatur corrupti impedit accusantium quo eos maiores? Ex quia laboriosam quo commodi laborum ullam perferendis, nihil aliquam accusamus totam. Velit, molestias?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tabs