import React, { useState }  from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import './Login.css';
import Form from 'react-bootstrap/Form';
import { signInWithEmailAndPassword } from "firebase/auth";


import { auth } from "../firebase/firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "../Alert";
import { FirebaseError } from 'firebase/app';



export default function Login() {
  
  
  const [showPwd, setShowPwd] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  async function onLogin(e) {
    e.preventDefault();
    console.log("submitted");

    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);

      console.log(userCred);
      navigate("/home");
    } catch (err) {
      setError(err.code + ". Please try again");
    }
  }


  return (
    <div id="login-outer-div">

      <div className="container card p-5 super-round-corner login bg-white" id="login-card">

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
        <form className='mt-4' onSubmit={onLogin}>

          <Form.Group className="mb-3 border-secondary" controlId="formBasicEmail" 
              onChange={(e) => setEmail(e.target.value)}>
            <Form.Control type="email" placeholder="Email" autoComplete="email" 
              />
          </Form.Group>

          <div className="input-group mb-3 border-secondary">

            <input type="password" className="form-control" placeholder="Password" autoComplete='password' 
              onChange={(e) => setPassword(e.target.value)}/>
            <button className="btn btn-outline-secondary" type="button" id="showPwd">
              <i className="bi bi-eye"></i>
            </button>
          </div>
          
          <div className="row mb-2">
            <div className="col d-flex justify-content-start">
              {/* <div className="checkbox">
                <input className="form-check-input mt-1" type="checkbox" value="" id="rmbm" />
                <label className="form-check-label" htmlFor="rmbm" > Remember me </label>
              </div> */}
            </div>
            <div className="col d-flex justify-content-end">
              <Link to="/forgot_password">Forgot password?</Link>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-3 mt-2 form-control" id='sign-in-btn' 
            disabled={!(email && password)} >
            Sign in
          </button>

          <div className="text-center">
            <p>Have not registered yet? <Link to={"/register"}><strong>Sign up</strong></Link></p>
          </div>

        </form>
        {error ? <Alert className="mt-4 mb-0">{error}</Alert> : <></>}
      </div>

    </div>
  )
}
