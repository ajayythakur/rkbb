import React, { useEffect, useState } from 'react'
import '../CSS/ProductCard.css'
import { MDBBtn } from 'mdb-react-ui-kit';
const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://backend-for-react-blog.onrender.com/food")
      .then((res) => res.json())
      .catch((err) => console.log(err))
      .then(res => setData(res));
  }, [])

  console.log(data);
  return (
    <div className='product-page'>
      {
       data && data.map((n) => (
          <div className='outer-card'>
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
  )
}

export default Products
