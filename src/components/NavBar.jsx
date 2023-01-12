import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar'>
      <span className='logo'> Forum</span>
      <div className='user'>
        <img src='img/AZIZAH.png' alt='' />
        <span>Adam</span>
        <button>log</button>
      </div>
    </div>
  )
}

export default NavBar