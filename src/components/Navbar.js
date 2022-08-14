import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import './Navbar.css';

export default function NavbarComponent() {

  // eslint-disable-next-line no-use-before-define
  var prevScrollpos = window.pageYOffset;
  // eslint-disable-next-line no-use-before-define
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  }

  // const { JSDOM } = require( "jsdom" );
  // const { window } = new JSDOM( "" );
//   const $ = require( "jquery" )( window );

//   $('#navitems Link').click(function(event) {
//     event.preventDefault(); //same as return false
//     $('#navitems Link').removeClass('active');        
//     $(this).toggleClass('active');   
// });

  return (
    <div className='mx-4 mt-3 pt-3 container'>
    <Navbar bg="" expand="lg" className='mt-2 fs-5 rounded appear-nav' id='navbar'>
        <Navbar.Brand to="/">
          <Link className='nav-link' to="/">
          <img 
            alt=""
            src="/Logo_green.svg"
            width={200}
            height={50}
            className= "d-inline-block align-top align-left"
            />{' '}
          </Link>
    
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto " id="navitems" >
            <Link className="nav-link px-4 navitem gradient" to="/" id='home_page'>
              Home
            </Link>
            <Link className="nav-link px-4 navitem gradient" to="/about" id='about_page'>
              About
            </Link> 
            <Link className="nav-link px-4 navitem gradient" to="/products" id='product_page'>
              Products
            </Link>
            <Link className="nav-link px-4 navitem gradient" to="/contact" id='contact_page'>
              Contact
            </Link>
          </Nav>

          <Nav className="justify-content-end" style={{ width: "100%" }}>
            {/* <Link className="nav-link" to="/get_app">
              <button type="button" className='btn btn-outline-secondary fs-5 px-4' id='get_app-btn'>
                    Get App
              </button>
            </Link> */}
            <Link className="nav-link mx-4" to="/login">
              <button type="button" className='btn px-5 fs-5 ' id='login-btn'>
                    Log in
                </button>
            </Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
  )
}
