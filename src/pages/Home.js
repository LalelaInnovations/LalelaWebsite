import React from 'react';
import promo from '../assets/promo/Lalela Innovations.mp4';
import './Home.css'

// Home Page Code
export default function Home() {
  // let navigate = useNavigate() 
  // function navToRegister() {
  //   navigate('/');
  // }
  return ( 
    <div className='container home-top'>
      <div>
        Section 1: Main text and animated mock up
      </div>

      <div>
        Section 2: benefits
      </div>

      <div>
        Section 3: carousel
      </div>

      <div>
        Section 4: Full screen video
      </div>
      
      

    {/* <div className="bg-dark">
      <div className=' p-5 text-light h3'>
        Learn more about us
      </div>
      <div class="embed-responsive embed-responsive-16by9 m-3 react-player">
        <iframe class="embed-responsive-item" width="500vw" height="300vh" src={promo} ></iframe>
      </div>
      <div className='mb-10'>.</div>
    </div> */}

      <div className="fixed-bottom" id="home-video">
          <video autoPlay muted loop poster="blackbg2.jpeg" src={promo}/>
      </div>

      <div>
        Testing
      </div>

     
  </div>
);
}
 