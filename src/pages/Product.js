import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Product.css';


export default function Products() {
  let navigate = useNavigate() 
  function navToContact() {
    navigate('/contact');
  }
  
  function navToHome() {
    navigate('/');
  }
  return ( 

    <div className='product_page bg_fixed' id="a">

   

      <div className='container product_margin title-in'>
       
          <div className="mt-3 ms-5 me-5 text-dark shadow rounded bg-light">
          <div className='row'>
            <p className="col-1"></p>
            <p className='fs-1 col-10 pt-2' id="product_page_heading">Our Plans</p>
            <button type="button" className="col-1 btn-close btn-close-pos" aria-label="Close" onClick={navToHome}></button>
          </div>          
        </div>
      
  
      <div className="container pb-5 top-layer">
        <div className="row">
          {/* Individual PAYG Product Card */}
          <div className="col-md-12 col-lg-3 mb-4 mb-lg-0 card-in-1 card-zoom">
            <div className="card text-black">
              {/* Optional IMAGE here if there are any
              <img src="blackbg2.jpeg"
                class="card-img-top" alt="" /> */}
              <div className="card-body">
                <div className="text-center mt-1">
                  <h4 className="card-title">Pay-As-You-Go</h4>
                  <h6 className="text-primary mb-1 pb-3">Individual Plan</h6>
                </div>

                <div className="text-center">
                  <div className="p-3 mx-n3 mb-4 rounded" style={{"backgroundColor": "#eff1f2"}}>
                    <h5 className="mb-0">Overview</h5>
                  </div>
                  <div className="d-flex flex-column mb-4">
                    <span className="h1 mb-0">0+</span>
                    <span>Pay-As-You-Go Tests</span>
                  </div>

                  <div className="d-flex flex-column mb-4">
                    <span className="h1 mb-0">
                      <i className="fas fa-camera-retro"></i>
                    </span>
                    <ul className="list-unstyled mb-0">
                      <li>Device Included</li>
                      <li aria-hidden="true">—</li>
                      <li>Pay-as-you-go</li>
                      <li>Mobile App</li>
                      <li>Tech Support</li>
                    </ul>
                  </div>

                  <div className="p-3 mx-n3 mb-4 rounded" style={{"backgroundColor": "#eff1f2"}}>
                    <h5 className="mb-0">Highlight</h5>
                  </div>

                  <div className="d-flex flex-column mb-4">
                    <span className="mb-2">Maximum flexibility to pay for the tests you will use with zero upfront pricing</span>
                    {/* <span class="mb-2">Easy-to-use with minimal training required</span> */}
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <button type="button" className="btn btn-primary form-control top-layer" onClick={navToContact}>
                    Select Plan
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Individual Preloaded Product Card */}
          <div className="col-md-12 col-lg-3 mb-4 mb-lg-0 card-in-2 card-zoom">
            <div className="card text-black">
            {/* <img src="blackbg2.jpeg"
                class="card-img-top" alt="" /> */}
              <div className="card-body">
                <div className="text-center mt-1">
                  <h4 className="card-title">Annual Preloaded</h4>
                  <h6 className="text-primary mb-1 pb-3">Individual Plan</h6>
                </div>

                <div className="text-center">
                  <div className="p-3 mx-n3 mb-4 rounded" style={{"backgroundColor": "#eff1f2"}}>
                    <h5 className="mb-0">Overview</h5>
                  </div>

                  <div className="d-flex flex-column mb-4">
                    <span className="h1 mb-0">100</span>
                    <span>Lalela Tests</span>
                  </div>

                  <div className="d-flex flex-column mb-4">
                    <span className="h1 mb-0">
                      <i className="fas fa-camera-retro"></i>
                    </span>
                    <ul className="list-unstyled mb-0">
                      <li>Device Included</li>
                      <li>100 Preloaded Tests</li>
                      <li>Pay-as-you-go After</li>
                      <li>Mobile App</li>
                      <li>Priority Tech Support</li>
                    </ul>
                  </div>

                  <div className="p-3 mx-n3 mb-4 rounded" style={{"backgroundColor": "#eff1f2"}}>
                    <h5 className="mb-0">Highlight</h5>
                  </div>

                  <div className="d-flex flex-column mb-4">
                    <span className="mb-2">All-in-one solution for individual practitioners and Lalela users</span>
                    {/* <span class="mb-2">Easy-to-use with minimal training required</span> */}
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <button type="button" className="btn btn-primary form-control top-layer" onClick={navToContact}>
                    Select Plan
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Organization Capped Product Card */}
          <div className="col-md-6 col-lg-3 mb-4 mb-md-0 card-in-3 card-zoom">
            <div className="card text-black">
            {/* <img src="blackbg2.jpeg"
                class="card-img-top" alt="" /> */}
              <div className="card-body">
                <div className="text-center mt-1">
                  <h4 className="card-title">Annual Capped</h4>
                  <h6 className="text-primary mb-1 pb-3">Organizational Plan</h6>
                </div>

                <div className="text-center">
                  <div className="p-3 mx-n3 mb-4 rounded" style={{"backgroundColor": "#eff1f2"}}>
                    <h5 className="mb-0">Overview</h5>
                  </div>

                  <div className="d-flex flex-column mb-4">
                    <span className="h1 mb-0">3,000</span>
                    <span>Lalela Tests</span>
                  </div>

                  <div className="d-flex flex-column mb-4">
                    <span className="h1 mb-0">
                      <i className="fas fa-camera-retro"></i>
                    </span>
                    <ul className="list-unstyled mb-0">
                      <li aria-hidden="true">Device Included</li>
                      <li>3,000 Preloaded Tests</li>
                      <li aria-hidden="true">—</li>
                      <li>Mobile App</li>
                      <li>Priority Tech Support</li>
                    </ul>
                  </div>

              

                  <div className="p-3 mx-n3 mb-4 rounded" style={{"backgroundColor": "#eff1f2"}}>
                    <h5 className="mb-0">Highlight</h5>
                  </div>

                  <div className="d-flex flex-column mb-4">
                    <span className="mb-2">All-in-one solution for small to medium organizations</span>
                    {/* <span class="mb-2">Easy-to-use with minimal training required</span> */}
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <button type="button" className="btn btn-primary form-control top-layer" onClick={navToContact}>
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Organization Uncapped Product Card */}
          <div className="col-md-6 col-lg-3 mb-4 mb-md-0 card-in-4 card-zoom">
            <div className="card text-black">
            {/* <img src="blackbg2.jpeg"
                class="card-img-top" alt="" /> */}
              <div className="card-body">
                <div className="text-center mt-1">
                  <h4 className="card-title">Annual Uncapped</h4>
                  <h6 className="text-primary mb-1 pb-3">Organizational Plan</h6>
                </div>

                <div className="text-center">
                  <div className="p-3 mx-n3 mb-4 rounded" style={{"backgroundColor": "#eff1f2"}}>
                    <h5 className="mb-0">Overview</h5>
                  </div>

                  <div className="d-flex flex-column mb-4">
                    <span className="h1 mb-0">Unlimited</span>
                    <span>Lalela Tests</span>
                  </div>

                  <div className="d-flex flex-column mb-4">
                    <span className="h1 mb-0">
                      <i className="fas fa-camera-retro"></i>
                    </span>
                    <ul className="list-unstyled mb-0">
                      <li aria-hidden="true">Device Included</li>
                      <li>Unlimited Tests</li>
                      <li aria-hidden="true">—</li>
                      <li>Mobile App</li>
                      <li>Priority Tech Support</li>
                    </ul>
                  </div>

                  <div className="p-3 mx-n3 mb-4 rounded" style={{"backgroundColor": "#eff1f2"}}>
                    <h5 className="mb-0">Highlight</h5>
                  </div>

                  <div className="d-flex flex-column mb-4">
                    <span className="mb-2">All-in-one solution for larger organizations with the best Lalela offers</span>
                    {/* <span class="mb-2">Easy-to-use with minimal training required</span> */}
                  </div>
                </div>

                <div>
                  <button type="button" className="btn btn-primary form-control top-layer" onClick={navToContact}>
                    Contact Us
                  </button>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
  