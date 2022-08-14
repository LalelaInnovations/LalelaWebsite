import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

export default function footer() {

  // $('#myModal').on('shown.bs.modal', function () {
  //   $('#myInput').trigger('focus')
  // }){

  return (
    <div className='text-muted footer-btm table'>

      <hr></hr>

      <div className='m-3 justify-content-center thead' id='footer'>

        <div>
          <Link className="footer-hover rounded nav-link px-4" to="/terms_and_conditions">
            Terms & Conditions
          </Link>
        </div>

        <div>
          <Link className="footer-hover rounded nav-link px-4" to="/privacy">
            Privacy Policy
          </Link>
        </div>
      
        <div>
          <Link className="footer-hover rounded nav-link px-4" to="/contact">
            Contact Us
          </Link>
        </div>

        <div className="mx-4" >
          <Link className="rounded nav-link" to="/">
            © 2020-2022 Lalela Innovations  
          </Link>
        </div>
      </div>
  </div>
  )
}
