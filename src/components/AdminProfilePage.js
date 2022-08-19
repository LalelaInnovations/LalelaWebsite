import React, { useState} from "react";
import { adminProfile } from "../common/adminProfile";
//import Spinner from "../common/Spinner";
import  adminProfileServices from "../services/adminProfileServices"

export default function AdminProfilePage(user) {
    
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [idNumber, setidNumber] = useState('');
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cellphoneNumber, setCellphoneNumber] = useState('');
    //const [fetching, setFetching] = useState(false)
  
  
  
  
  //useEffect: reads when function is loaded 
//   useEffect(() => {
//     fetchProfile();
//   },[]);
  
  
//   async function fetchProfile(){
//     setFetching(true)
    
//     try{
//       const profile = await adminProfileService.readProfile(user)
//       if(profile) {
//         setName(profile.name);
//         setSurname(profile.surname);
//         setidNumberer(profile.idNumber);
//         setEmail(profile.email);
//         setpassword(profile.password);
//         setcellphoneNumber(profile.cellphoneNumber);
//       } 
//       } catch(err) {
//         console.log(err)
  
//     }
//     setFetching(false)
//   }
     
      async function saveProfile(e) {
          e.preventDefault();
  
          const profile = new adminProfile({
              id: user.uid,
              name: name,
              surname: surname,
              idNumber: idNumber,
              location: location,
              email: email,
              password: password,
              cellphoneNumber: cellphoneNumber
          });
          console.log(profile);
  
          try{
              await adminProfileServices.saveProfile(profile)
          }catch(err){
              console.log(err)
          }
      }
  
    return (
      
      <div className="container mt-3">
        <div className="text-center">
        
    
          
        <div className="card">
          <div className="card-header">
            <h1 className="mb-0">Register Admin</h1>
          </div>
          <div className="card-body">
          <form onSubmit={saveProfile} className="row g-3">
            <div className="col-md-6">
              <label  className="form-label">
                Name
              </label>
              <input 
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Surname
              </label>
              <input
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-12">
              <label className="form-label">
                Identity Number (ID Number)
              </label>
              <input
              value={idNumber}
              onChange={(e) => setidNumber(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-12">
              <label className="form-label">
               Email
              </label>
              <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
              />
            </div>
            <div className="col-12">
              <label className="form-label">
               Password
              </label>
              <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
              />
            </div>
            
            <div className="col-md-6">
              <label className="form-label">
               Location
              </label>
              <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <label  className="form-label">
                Phone Number
              </label>
              <input 
              value={cellphoneNumber}
              onChange={(e) => setCellphoneNumber(e.target.value)}
              type="text" className="form-control"  />
            </div>
            <div className="col-12">
  
            </div>
            <div className="col-12 d-grid">
              <button type="submit" className="btn btn-success">
                  Save Profile
              </button>
            </div>
          </form>
          </div>
        </div>
        </div>
      </div>
    );
    
    }
  

