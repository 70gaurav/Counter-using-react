import React from 'react'
import Fade from 'react-reveal/Fade';

function Section(props) {
  return (
    <section style={{ backgroundImage: `url(images/${props.backgroundImage})` }}>
      <Fade left>
        <div className='Model'>
          <h1>{props.name}</h1>
          <p>{props.description}</p>
        </div>
      </Fade>
      
      <Fade right> <div className='Order'>
       <a href=''>{props.leftbutton}</a>
        {props.rightbutton && <a href=''>{props.rightbutton}</a>}
      </div></Fade>
      
    {props.arrow && <img src='images/down-arrow.svg' className='arrow'></img>}
    </section>
  )
}

export default Section