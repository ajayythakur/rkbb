import React, { useEffect, useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import Products from '../Products';
import '../../CSS/ProductCard.css'

const Seed = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://backend-for-react-blog.onrender.com/food")
      .then((res) => res.json())
      .catch((err) => console.log(err))
      .then(res => setData(res)); 
  }, [])

  console.log("seed page")
  return (
    <div>
      <Products/>

      <div className='prod-img'>
        <img src="https://images.theconversation.com/files/255562/original/file-20190125-108355-1ke4nha.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3000%2C2245&q=45&auto=format&w=926&fit=clip" alt='pesticide' />
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

export default Seed