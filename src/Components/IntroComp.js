import React, { useState } from 'react';
import '../CSS/IntroCompCSS.css'
import {

  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBContainer,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import TypewriterComp from './TypewriterComp';
import { Link } from 'react-router-dom';

export default function IntroComp() {
    // eslint-disable-next-line
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
        <MDBContainer fluid>
          {/* <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler> */}
          <MDBCollapse show={showBasic}>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>


      <div
        id='intro-example'
        className='p-5 text-left bg-image'
        style={{ backgroundImage: "url('https://i.pinimg.com/1200x/7f/f3/69/7ff369296f3fbda2a679a33a4e89aca0.jpg')" }}
      >
        <div className='' style={{ backgroundColor: '' }}>
          <div className='d-flex justify-content-left align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Welcome Farmer</h1>
              <h5 className='mb-4'><TypewriterComp/></h5>
              {/* <MDBBtn
                className="m-2"
                tag="a"
                outline
                size="lg"
                rel="nofollow"
                target="_blank"
                href='https://www.youtube.com/watch?v=c9B4TPnak1A'
              >
                Start tutorial
              </MDBBtn> */}
              <MDBBtn
                className="m-2"
                outline
                size="lg"
              >
                <Link className='link3' to='/products'>
                Products
                </Link>
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}