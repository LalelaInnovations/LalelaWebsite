import React from 'react'
import promo from '../assets/promo/Lalela Demo HD720.mp4';
import QR from '../assets/created/lalelaQR.png'
import './Download.css';

export default function Download() {

  return (
    <>


          <div class="video-container">
            <video autoPlay muted loop poster="blackbg2.jpeg" src={promo}/>
          </div>

    </>
  )
}
