import React from 'react'
import './GetApp.css';
import QR from '../assets/created/lalelaQR.png'
import promo from '../assets/created/Lalela Demo HD720.mp4';

// App Download Pages
export default function GetApp() {
  // Animation for transitioning between getapp page and download page
  var fade_state = true;
  function fade() {

    let div = document.getElementById("download-btn-wrapper");
    let card = document.getElementById("download-page");

    if (fade_state === true) {
      div.style.animation = "fade-out 1.5s forwards";
      card.classList.remove("hidden");
      card.style.animation = "fade-in 2s forwards";
      fade_state = false;
  } 
}

return (
  <div className='container'>
    <div>
        <video autoPlay muted loop poster="blackbg2.jpeg" src={promo} className="getAppVideo"/>
    </div>

    <div className='pages'>
      <div class="wrapper appear" id="download-btn-wrapper">
        <div class="link_wrapper">
          <button className="d-btn px-4 p-1 rounded" id="download-btn" onClick={fade}>
              Download Now {'\t>'}
          </button>
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
              <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div className='container appear-card hidden' id="download-page">
      <div className=" card mb-3 p-5 super-round-corner" id="download_card">
        <div className="row g-0">
          <div className="col-md-4">
          <img src={QR} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body text-shadow-custom">
              <h5 className="card-title lalela-green">Scan to Download Our Mobile App</h5>
              <p className="card-text">
                Lalela is a <em>smart</em>, <em>clinically</em> validated, smart-phone 
                hearing testing and screening audiometer, that allows for <em>easier</em>, <em>cost-effective </em> 
                hearing health care. <br></br>
                <div className="text-lighter-black">It allows users to test hearing easily and quickly, review 
                results, create reports, and refer patients to the nearest audiology service 
                provider when hearing loss is detected. </div>
              </p>
              <p className="card-text">
                  <small className="text-muted">Available currently on {" "}
                  {/* change URL after getting app url */}
                    <a href="https://www.lalelainnovations.com/">Android</a>
                  </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
