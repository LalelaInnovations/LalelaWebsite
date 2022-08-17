import React from 'react'

function Profile() {
  return (
    <div className="container mt-3">
      
        
    
          
    <div className="card">
      <div className="card-header">
        <h1 className="mb-0">Admin's Profile</h1>
      </div>
      <div className="card-body">
      <form  className="row g-3">
        <div className="col-md-6">
          <label  className="form-label">
            Name
          </label>
          <input 
        
          type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">
            Surname
          </label>
          <input
           
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-12">
          <label className="form-label">
            Identity Number (ID Number)
          </label>
          <input
          
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-12">
          <label className="form-label">
           Email
          </label>
          <input
          
            type="email"
            className="form-control"
          />
        </div>
        <div className="col-12">
          <label className="form-label">
           Password
          </label>
          <input
          
            type="password"
            className="form-control"
          />
        </div>
        
        <div className="col-md-6">
          <label className="form-label">
           Location
          </label>
          <input
         
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label  className="form-label">
            Phone Number
          </label>
          <input 
          type="text" className="form-control"  />
        </div>
        <div className="col-12">

        </div>
        <div className="col-12 d-grid">
          <button type="submit" className="btn btn-dark">
              Save Profile
          </button>
        </div>
      </form>
      {/* <CreateNewAdmin></CreateNewAdmin> */}
      </div>
    </div>

  </div>
  )
}

export default Profile