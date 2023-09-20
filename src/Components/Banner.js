import React from 'react'
import '../CSS/Banner.css'
import logo from '../Assests/logo4.png'

const Banner = () => {
  return (
    <div className='banner'>
      <img src={logo} alt='logo' className='logo' />
    </div>
  )
}

export default Banner