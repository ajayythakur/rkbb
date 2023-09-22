import React from 'react'
// import { MDBBtn } from 'mdb-react-ui-kit';
import '../CSS/ProductCard.css'
import { Link } from 'react-router-dom';
const Products = () => {

  return (
    <>
    <div>
      <div className='category'>
    <button class="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Select Category </button>
    </div>

<div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Category</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body small">
    <div className='list'>
    <div className='btn btn-success'><Link className='prod-link' to='/seeds'> Seed</Link></div>
    <div className='btn btn-success'><Link className='prod-link' to='/pesticides'>Pesticide</Link></div>
    <div className='btn btn-success'><Link className='prod-link' to='/herbicides'>Herbicide</Link></div>
    <div className='btn btn-success'><Link className='prod-link' to='/fertilizers'>Fertilizer</Link></div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Products
