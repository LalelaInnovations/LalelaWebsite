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
    <div className='container home-top '>

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
       
        {/* <div>
          Section 1: Main text and animated mock up
        </div> */}
         <div className='table pt-3 '>
        <div className='row'>
          {/* <div className='col-6'><img src={logo_green}/></div> */}
          
          <div className=' col-6'>
            <p className="fs-2" id="tagline2">
              Why Lalela?
            </p>
          </div>

        

        </div>

        <div className="row" id='card-fade-3'>
          <div className="col-sm-12 col-lg-4 ">
            <div className="card border-light home-card1 m-2 super-round-corners">
              <div className="card-body home-card-text">
                <h5 className="card-title fs-3 mb-3">Easy-to-use Healthcare</h5>
                <i className="bi bi-file-medical fs-3"></i>
                <p className="card-text mt-3">Anyone with minimal training can use Lalela to perform a hearing test and navigate through your private database.</p>

              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="card border-light home-card2 m-2">
              <div className="card-body home-card-text">
                <h5 className="card-title fs-3 mb-3">Effective Medical-grade Test</h5>
                <i className="bi bi-clipboard2-pulse fs-3"></i>
                <p className="card-text mt-3">Lalela has been approved as a Class 2 medical device for hearing screening and testing by SAHPRA.</p>

              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="card border-light home-card3 m-2">
              <div className="card-body home-card-text">
                <h5 className="card-title fs-3 mb-3">On-the-go Convenience</h5>
                <i className="bi bi-phone fs-3"></i>
                <p className="card-text mt-3 ">Lalela was designed to be used in remote settings where services are limited, so it can be used almost anywhere</p>

              </div>
            </div>
          </div>
        </div>


        </div>
        {/* <div>
          Section 4: Full screen video
        </div> */}
     

        <div id="home-video">
          <video autoPlay muted loop poster="blackbg2.jpeg" className="rounded" src={promo}/>
        </div>
      </div>
            
   
      
              
    
  </>
)
}
 