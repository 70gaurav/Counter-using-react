import React from 'react'

function Section(props) {
  return (
    <section style={{backgroundImage:`url(images/${props.backgroundImage})`}}>
        <div className='Model'>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        </div>
        <div className='Order'>
          <a href=''>{props.leftbutton}</a>
          {props.rightbutton &&<a href=''>{props.rightbutton}</a>}
        </div>
          {props.arrow && <img src='images/down-arrow.svg' className='arrow'></img>}
    </section>
  )
}

export default Section