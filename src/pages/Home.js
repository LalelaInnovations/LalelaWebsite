import React from 'react';
import promo from '../assets/created/Lalela Innovations.mp4';
import './Home.css'
// import logo_green from "../assets/design/Exports/Export 10Feb/Web Assets/logo_green.svg"

// Home Page Code
export default function Home() {
  // let navigate = useNavigate() 
  // function navToRegister() {
  //   navigate('/');
  // }
  return ( 
    <>
      <div className='container home-top'>

      <div className='table pt-5 '>
        <div className='row'>
          {/* <div className='col-6'><img src={logo_green}/></div> */}
          
          <div className=' col-6'>
            <p className="fs-2" id="tagline">
              Lalela is an affordable,<br/>
              reliable mobile solution for<br/>
              hearing healthcare.
            </p>
          </div>

        </div>



      </div>
       
  
        <div>
          Section 1: Main text and animated mock up
        </div>

        <div>
        <div class="row ">
          <div class="col-sm-4">
            <div class="card border-light">
              <div class="card-body">
                <h5 class="card-title">Easy-to-use Hearing Healthcare</h5>
                <i class="bi bi-file-medical"></i>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card border-light">
              <div class="card-body">
                <h5 class="card-title">Private and Secure Database</h5>
                <i class="bi bi-clipboard2-pulse"></i>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card border-light">
              <div class="card-body">
                <h5 class="card-title">On-the-go Convenience</h5>
                <i class="bi bi-phone"></i>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

              </div>
            </div>
          </div>
        </div>


        </div>
        <div>
          Section 4: Full screen video
        </div>
        
        <div>
          Testing
        </div>


      </div>
            
      <div className="">
        <video autoPlay muted loop poster="blackbg2.jpeg" src={promo}/>
      </div>
      
              
    
  </>
)
}
 