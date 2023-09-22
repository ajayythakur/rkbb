import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Products from '../Pages/Products'
import AboutUs from '../Pages/AboutUs'
import Seed from '../Pages/SubProductPages/Seed'
import Fertilizer from '../Pages/SubProductPages/Fertilizer'
import Herbicide from '../Pages/SubProductPages/Herbicide'
import Pesticide from '../Pages/SubProductPages/Pesticide'

const Routing = () => {
  return (
    <div>
        <Routes> 
            <Route path='/' element={<HomePage/>} /> 
            <Route path='/products' element={<Products/>} />
            <Route path='/about_us' element={<AboutUs/>} />
            <Route path='/seeds' element={<Seed/>} />
            <Route path='/pesticides' element={<Pesticide/>} />
            <Route path='/fertilizers' element={<Fertilizer/>} />
            <Route path='/herbicides' element={<Herbicide/>} />
        </Routes>
    </div>
  )
}

export default Routing