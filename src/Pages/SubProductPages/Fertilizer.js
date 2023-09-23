import React, { useEffect, useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import Products from '../Products';
import '../../CSS/ProductCard.css'
import Fertilizer_img from '../../Assests/fertilizer.jpeg'

const Fertilizer = () => { 
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://backend-for-react-blog.onrender.com/food")
      .then((res) => res.json())
      .catch((err) => console.log(err))
      .then(res => setData(res)); 
  }, [])
  return (
    <div>
      <Products/>

      <div className='prod-img'>
        <img src={Fertilizer_img} alt='herbicide' />
      </div>

    
          <div className='product-page'>
      {
       data && data.map((n,index) => (
          <div className='outer-card' key={index}>
            <div className='image'><img src={n.img} alt='404' /></div>
            <div className='detail'>{n.title} </div>
            <div className='btn'>
              <MDBBtn className='me-1' color='success'>
                Success
              </MDBBtn>
              <MDBBtn color='info'>
                Info
              </MDBBtn>
            </div>
          </div>
        ))
      }

    </div>
    </div>
  )
}

export default Fertilizer