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
      
  
      <div class="container pb-5 top-layer">
        <div class="row">
          {/* Individual PAYG Product Card */}
          <div class="col-md-12 col-lg-3 mb-4 mb-lg-0 card-in-1 card-zoom">
            <div class="card text-black">
              {/* Optional IMAGE here if there are any
              <img src="blackbg2.jpeg"
                class="card-img-top" alt="" /> */}
              <div class="card-body">
                <div class="text-center mt-1">
                  <h4 class="card-title">Pay-As-You-Go</h4>
                  <h6 class="text-primary mb-1 pb-3">Individual Plan</h6>
                </div>

                <div class="text-center">
                  <div class="p-3 mx-n3 mb-4 rounded" style={{"background-color": "#eff1f2"}}>
                    <h5 class="mb-0">Overview</h5>
                  </div>
                  <div class="d-flex flex-column mb-4">
                    <span class="h1 mb-0">0+</span>
                    <span>Pay-As-You-Go Tests</span>
                  </div>

                  <div class="d-flex flex-column mb-4">
                    <span class="h1 mb-0">
                      <i class="fas fa-camera-retro"></i>
                    </span>
                    <ul class="list-unstyled mb-0">
                      <li>Device Included</li>
                      <li aria-hidden="true">—</li>
                      <li>Pay-as-you-go</li>
                      <li>Mobile App</li>
                      <li>Tech Support</li>
                    </ul>
                  </div>

                  <div class="p-3 mx-n3 mb-4 rounded" style={{"background-color": "#eff1f2"}}>
                    <h5 class="mb-0">Highlight</h5>
                  </div>

                  <div class="d-flex flex-column mb-4">
                    <span class="mb-2">Maximum flexibility to pay for the tests you will use with zero upfront pricing</span>
                    {/* <span class="mb-2">Easy-to-use with minimal training required</span> */}
                  </div>
                </div>

                <div class="d-flex flex-row">
                  <button type="button" class="btn btn-primary form-control top-layer" onClick={navToContact}>
                    Select Plan
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Individual Preloaded Product Card */}
          <div class="col-md-12 col-lg-3 mb-4 mb-lg-0 card-in-2 card-zoom">
            <div class="card text-black">
            {/* <img src="blackbg2.jpeg"
                class="card-img-top" alt="" /> */}
              <div class="card-body">
                <div class="text-center mt-1">
                  <h4 class="card-title">Annual Preloaded</h4>
                  <h6 class="text-primary mb-1 pb-3">Individual Plan</h6>
                </div>

                <div class="text-center">
                  <div class="p-3 mx-n3 mb-4 rounded" style={{"background-color": "#eff1f2"}}>
                    <h5 class="mb-0">Overview</h5>
                  </div>

                  <div class="d-flex flex-column mb-4">
                    <span class="h1 mb-0">100</span>
                    <span>Lalela Tests</span>
                  </div>

                  <div class="d-flex flex-column mb-4">
                    <span class="h1 mb-0">
                      <i class="fas fa-camera-retro"></i>
                    </span>
                    <ul class="list-unstyled mb-0">
                      <li>Device Included</li>
                      <li>100 Preloaded Tests</li>
                      <li>Pay-as-you-go After</li>
                      <li>Mobile App</li>
                      <li>Priority Tech Support</li>
                    </ul>
                  </div>

                  <div class="p-3 mx-n3 mb-4 rounded" style={{"background-color": "#eff1f2"}}>
                    <h5 class="mb-0">Highlight</h5>
                  </div>

                  <div class="d-flex flex-column mb-4">
                    <span class="mb-2">All-in-one solution for individual practitioners and Lalela users</span>
                    {/* <span class="mb-2">Easy-to-use with minimal training required</span> */}
                  </div>
                </div>

                <div class="d-flex flex-row">
                  <button type="button" class="btn btn-primary form-control top-layer" onClick={navToContact}>
                    Select Plan
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Organization Capped Product Card */}
          <div class="col-md-6 col-lg-3 mb-4 mb-md-0 card-in-3 card-zoom">
            <div class="card text-black">
            {/* <img src="blackbg2.jpeg"
                class="card-img-top" alt="" /> */}
              <div class="card-body">
                <div class="text-center mt-1">
                  <h4 class="card-title">Annual Capped</h4>
                  <h6 class="text-primary mb-1 pb-3">Organizational Plan</h6>
                </div>

                <div class="text-center">
                  <div class="p-3 mx-n3 mb-4 rounded" style={{"background-color": "#eff1f2"}}>
                    <h5 class="mb-0">Overview</h5>
                  </div>

                  <div class="d-flex flex-column mb-4">
                    <span class="h1 mb-0">3,000</span>
                    <span>Lalela Tests</span>
                  </div>

                  <div class="d-flex flex-column mb-4">
                    <span class="h1 mb-0">
                      <i class="fas fa-camera-retro"></i>
                    </span>
                    <ul class="list-unstyled mb-0">
                      <li aria-hidden="true">Device Included</li>
                      <li>3,000 Preloaded Tests</li>
                      <li aria-hidden="true">—</li>
                      <li>Mobile App</li>
                      <li>Priority Tech Support</li>
                    </ul>
                  </div>

              

                  <div class="p-3 mx-n3 mb-4 rounded" style={{"background-color": "#eff1f2"}}>
                    <h5 class="mb-0">Highlight</h5>
                  </div>

                  <div class="d-flex flex-column mb-4">
                    <span class="mb-2">All-in-one solution for small to medium organizations</span>
                    {/* <span class="mb-2">Easy-to-use with minimal training required</span> */}
                  </div>
                </div>

                <div class="d-flex flex-row">
                  <button type="button" class="btn btn-primary form-control top-layer" onClick={navToContact}>
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Organization Uncapped Product Card */}
          <div class="col-md-6 col-lg-3 mb-4 mb-md-0 card-in-4 card-zoom">
            <div class="card text-black">
            {/* <img src="blackbg2.jpeg"
                class="card-img-top" alt="" /> */}
              <div class="card-body">
                <div class="text-center mt-1">
                  <h4 class="card-title">Annual Uncapped</h4>
                  <h6 class="text-primary mb-1 pb-3">Organizational Plan</h6>
                </div>

                <div class="text-center">
                  <div class="p-3 mx-n3 mb-4 rounded" style={{"background-color": "#eff1f2"}}>
                    <h5 class="mb-0">Overview</h5>
                  </div>

                  <div class="d-flex flex-column mb-4">
                    <span class="h1 mb-0">Unlimited</span>
                    <span>Lalela Tests</span>
                  </div>

                  <div class="d-flex flex-column mb-4">
                    <span class="h1 mb-0">
                      <i class="fas fa-camera-retro"></i>
                    </span>
                    <ul class="list-unstyled mb-0">
                      <li aria-hidden="true">Device Included</li>
                      <li>Unlimited Tests</li>
                      <li aria-hidden="true">—</li>
                      <li>Mobile App</li>
                      <li>Priority Tech Support</li>
                    </ul>
                  </div>

                  <div class="p-3 mx-n3 mb-4 rounded" style={{"background-color": "#eff1f2"}}>
                    <h5 class="mb-0">Highlight</h5>
                  </div>

                  <div class="d-flex flex-column mb-4">
                    <span class="mb-2">All-in-one solution for larger organizations with the best Lalela offers</span>
                    {/* <span class="mb-2">Easy-to-use with minimal training required</span> */}
                  </div>
                </div>

                <div>
                  <button type="button" class="btn btn-primary form-control top-layer" onClick={navToContact}>
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
  