import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom";


export default function ForgetPassword() {
   
    const [email, setEmail] = useState("");
    const auth = getAuth();

    async function triggerResetEmail(e){
      e.preventDefault();

      try{
          await sendPasswordResetEmail(auth, email);
          console.log("Password reset had been sent");

      } catch(err){
          console.log(err);
      }

      var myModal = document.getElementById('myModal');
      var myInput = document.getElementById('myInput');

      myModal.addEventListener('shown.bs.modal', function () {
      myInput.focus()
})
}
  return (
    <div className="container mt-4 card px-5 py-2 super-round-corner login bg-white" id="login-card"> 
        <div className='mt-3 p-3'>
        <img 
          alt="Lalela logo"
          src="/Logo_green.svg"
          id="login-logo"
          />
      </div>
        
        <form onSubmit={triggerResetEmail}>
        <div className='h4 mt-2 mb-4'> Reset Password</div>
        <input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email" 
          placeholder="Enter Email Address"
          className="form-control mb-2"
          autoComplete="email" />
        
        <button className="resetBtn btn btn-primary my-3 form-control" type="submit" size="md" disabled={!email} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Reset password</button>
        <button className="resetBtn btn btn-dark mb-4 form-control" type="submit" size="md" >
          <Link className="nav-link" to="/login">
            Back
          </Link>
        </button>
      </form>


      <div className="modal-dialog modal-dialog-centered">
       <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Reset Link Sent</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="alert alert-info mt-4 mb-4">
                  A password reset link is sent to "{email}".
                </div>   
        
                <div className="alert alert-secondary ">
                  Note: it may end up in your spam folder.
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  <Link className="nav-link" to="/login">
                    Back
                  </Link> 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  
  )

}
