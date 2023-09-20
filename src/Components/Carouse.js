import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../CSS/Carousel.css'

const Carouse = () => {
  return (
    <div>
        <Carousel>
                <div>
                    <img src="https://i.ytimg.com/vi/0AyLRV8SAIQ/maxresdefault.jpg" className='carousel-img' alt='404' />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-vector/man-farmer-work-corn-field-maize-meadow-crop_107791-15081.jpg" className='carousel-img' alt='404'/>
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-vector/farming-landing-page-agricultural-farm-with-barns-tractor-corn-fields-hay_9209-6262.jpg?w=2000" className='carousel-img' alt='404'/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
  )
}

export default Carouse