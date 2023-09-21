import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Products from '../Pages/Products'
import AboutUs from '../Pages/AboutUs'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>} /> 
            <Route path='/products' element={<Products/>} />
            <Route path='/about_us' element={<AboutUs/>} />
        </Routes>
    </div>
  )
}

export default Routing