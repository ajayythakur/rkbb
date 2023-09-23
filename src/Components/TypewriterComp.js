import React from 'react'
import { Typewriter } from 'react-simple-typewriter'



const TypewriterComp = () => {
   

  return (
<div className='App'>
      <h1 style={{ paddingTop: '0rem', margin: 'auto o', fontWeight: 'normal' }}>
        We Deals in{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Seeds', 'Fertilizers', 'Pesticides', 'Herbicides']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}

          />
        </span>
      </h1>
    </div>
 )
}   
export default TypewriterComp