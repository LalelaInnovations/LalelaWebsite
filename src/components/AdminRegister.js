import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

export default function AdminRegister() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function onFormSubmit(e) {
    e.preventDefault();
    console.log("submitted");

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user)
      navigate('/admin')
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="container mt-4">
    <div className="card">
      <div className="card-header">
        <h1 className="mb-0 mt-2">Register</h1>
      </div>
      <div className="card-body">
        <form onSubmit={onFormSubmit} className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
            />
          </div>

          <div className="col-12m d-grid gap-2">
            <button type="submit" className="btn btn-success">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

