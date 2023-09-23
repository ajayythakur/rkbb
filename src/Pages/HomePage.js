import React from 'react'
import Banner from '../Components/Banner'
import Carouse from '../Components/Carouse'
import IntroComp from '../Components/IntroComp'

const HomePage = () => {
  return (
    <div>
      <IntroComp/>
      <Banner/> 
      <Carouse/>       
    </div>
  )
}

export default HomePage