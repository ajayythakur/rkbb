import React from 'react'
import NavComp from './Components/NavComp'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Carouse from './Components/Carouse'

const Collection = () => {
  return (
    <div>
        <NavComp/>
        <Banner/>
        <Carouse/>
        <Footer/>
    </div>
  )
}

export default Collection