import React, { useState }  from 'react'
import NavbarComponent from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import './Login.css';
import { FiMail } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Register() {

   
  const [showPwd, setShowPwd] = useState(false);
  const [pwd, setPwd] = useState("");

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [idNumb, setIdNumber] = useState('');
  const [language, setLanguage] = useState('');
  const [email, setEmail] = useState('');
  const [passcode, setPasscode] = useState('');
  const [isSA, setSouthAfrican] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fetching, setFetching] = useState(false)

  
  function onSubmit(event) {
    event.preventDefault();
  }

  return (
    <div id="login-outer-div">

    <div className="container card px-5 py-2 super-round-corner login" id="login-card">

      <div className='mt-3'>
        <img 
          alt="Lalela logo"
          src="/Logo_green.svg"
          id="login-logo"
          />
      </div>
      {/* <div className='mt-3 pt-1 rounded text-dark fs-2'>
        Sign in
      </div>
      <div className="text-muted pb-2 fs-5">
        to Lalela Portal
      </div> */}
      <form className='mt-4' onSubmit={onSubmit}>
      <div className="col-md-6 mb-3">
            <label  className="form-label">
              First Name
            </label>
            <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" className="form-control" 
            autoComplete='given-name'/>
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">
              Last Name
            </label>
            <input
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              type="text"
              className="form-control"
              autoComplete='family-name'
            />
          </div>
         
          <div className="col-12 mb-3">
            <label className="form-label">
             Email
            </label>
            <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              autoComplete='email'
            />
          </div>
          <div className="col-12 mb-3">
            <label className="form-label">
             Password
            </label>
            <input
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
              type="password"
              className="form-control"
              autoComplete='password'
            />
          </div>
          
       
          <div className="col-md-6 mb-3">
            <label  className="form-label">
              Phone Number
            </label>
            <input 
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text" className="form-control" 
            autoComplete='phone'/>
          </div>
          <div className="col-12 mb-3">
            <label className="form-label">
              Identity Number (ID#)
            </label>
            <input
            value={idNumb}
            onChange={(e) => setIdNumber(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">
             Language
            </label>
            <input
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">
             Are you South African
            </label>
            <select className="form-select" value={isSA}
            onChange={(e) => setSouthAfrican(e.target.value)}>
              <option>Choose...</option>
              <option value="Yes, I am South African">Yes, I am South African</option>
              <option value ="No, I am not South African">No, I am not South African</option>
            </select>
          </div>


        
        <div class="row mb-2">
          <div class="col d-flex justify-content-start">
            
          </div>
        </div>

        <button type="button" class="btn btn-primary btn-block mb-3 mt-2 form-control" id='sign-in-btn' disabled={!((email && passcode)&&(idNumb&&phoneNumber))}>
          Register
        </button>

        <div class="text-center">
          <p>Have an account? <Link to={"/login"}><strong>Log in</strong></Link></p>
        </div>
      </form>

    </div>

  </div>
  )
}
