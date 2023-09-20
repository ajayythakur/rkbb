import React from 'react'
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <div>
{/* Remove the container if you want to extend the Footer to full width. */}
<div className="container my-5">
  {/* Footer */}
  <footer className="text-center text-lg-start text-dark" style={{backgroundColor: '#ECEFF1'}}>
    {/* Section: Social media */}
    <section className="d-flex justify-content-between p-4 text-white" style={{backgroundColor: '#21D192'}}>
      {/* Left */}
      <div className="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
      {/* Left */}
      {/* Right */}
      <div>
        <a href className="text-white me-4">
          <i className="fab fa-facebook-f" />
        </a>
        <a href className="text-white me-4">
          <i className="fab fa-twitter" />
        </a>
        <a href className="text-white me-4">
          <i className="fab fa-google" />
        </a>
        <a href className="text-white me-4">
          <i className="fab fa-instagram" />
        </a>
        <a href className="text-white me-4">
          <i className="fab fa-linkedin" />
        </a>
        <a href className="text-white me-4">
          <i className="fab fa-github" />
        </a>
      </div>
      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className>
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold">RAKESH KHAD BEEJ BHANDAR</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold">Products</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
            <p>
              <a href="#!" className="text-dark">MDBootstrap</a>
            </p>
            <p>
              <a href="#!" className="text-dark">MDWordPress</a>
            </p>
            <p>
              <a href="#!" className="text-dark">BrandFlow</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Bootstrap Angular</a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold">Useful links</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
            <p>
              <a href="#!" className="text-dark">Your Account</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Shipping Rates</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Help</a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
            <p><i className="fas fa-home mr-3" /> Rankoli, Baund Kalan</p>
            <p><i className="fas fa-envelope mr-3" /> rakeshsingh@gmail.com</p>
            <p><i className="fas fa-phone mr-3" /> 9050010340</p>
            <p><i className="fas fa-print mr-3" /> 8059458377</p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      © 2020 Copyright:
      <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</div>
{/* End of .container */}



            {/* <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter> */}

    </div>
  )
}

export default Footer