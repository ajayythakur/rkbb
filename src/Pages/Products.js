import React from 'react'
// import { MDBBtn } from 'mdb-react-ui-kit';
// import '../CSS/ProductCard.css'
import { Link } from 'react-router-dom';

const Products = () => {

  return (
    <>
<div className='list'>
    <div className='btn btn-success'><Link className='prod-link' to='/seeds'> Seed</Link></div>
    <div className='btn btn-success'><Link className='prod-link' to='/pesticides'>Pesticide</Link></div>
    <div className='btn btn-success'><Link className='prod-link' to='/herbicides'>Herbicide</Link></div>
    <div className='btn btn-success'><Link className='prod-link' to='/fertilizers'>Fertilizer</Link></div>
    </div>
    </>
  )
}

export default Products