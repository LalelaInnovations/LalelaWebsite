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
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  
  function onSubmit(event) {
    event.preventDefault();
  }

  return (
    <div id="login-outer-div">

    <div className="container card p-5 super-round-corner login" id="login-card">

      <div className='mb-3'>
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
        <Form.Group className="mb-3 border-secondary" controlId="formBasicEmail" onChange={(input) => setEmail(input.target.value)}>
          <Form.Control type="email" placeholder="Email" autocomplete="email" 
            />
        </Form.Group>

        <div class="input-group mb-3 border-secondary">
          <input type="password" class="form-control" placeholder="Password" autoComplete='password' onChange={(input) => setPwd(input.target.value)}/>
          <button class="btn btn-outline-secondary" type="button" id="showPwd">
            <i class="bi bi-eye"></i>
          </button>
        </div>
        
        <div class="row mb-2">
          <div class="col d-flex justify-content-start">
          </div>
        </div>

        <button type="button" class="btn btn-primary btn-block mb-3 mt-2 form-control" id='sign-in-btn' disabled={!(email && pwd)}>
          Sign in
        </button>

        <div class="text-center">
          <p>Have an account? <Link to={"/login"}><strong>Log in</strong></Link></p>
        </div>
      </form>

    </div>

  </div>
  )
}
