import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [menu, setmenu] = useState(false)
  function menuopen(e) {
    e.preventDefault()
    setmenu(true)
  }
  function close(){
    setmenu(false)
  }

  return (
    <header>
      <img src="images/logo.svg"></img>
      <ul className='Models'>
        <li><a href=''> Model S </a></li>
        <li><a href=''> Model 3 </a></li>
        <li><a href=''> Model X </a></li>
        <li><a href=''> Model Y </a></li>
        <li><a href=''> Solar Roof </a></li>
        <li><a href=''> Solar Panels </a></li>
      </ul>
      <ul className='shop'>
        <li><a href=''>Shop</a></li>
        <li><a href=''>Account</a></li>
        <li><a href='' onClick={menuopen}>Menu</a>
        </li>

      </ul>
      <ul className='menu' style={{ right: (menu === false) ? "-250px" : "0" }}>
        <CloseIcon className='close' onClick={close} />
        <li><a href=''> Model S </a></li>
        <li><a href=''> Model 3 </a></li>
        <li><a href=''> Model X </a></li>
        <li><a href=''> Model Y </a></li>
        <li><a href=''> Solar Roof </a></li>
        <li><a href=''> Solar Panels </a></li>
        <li><a href=''>Existing Inventory</a></li>
        <li><a href=''>Used Inventory</a></li>
        <li><a href=''>Trade In</a></li>
        <li><a href=''>Test Drive</a></li>
        <li><a href=''>Powerwall</a></li>
        <li><a href=''>Commercial Energy</a></li>
      </ul>

    </header>
  )
}

export default Header