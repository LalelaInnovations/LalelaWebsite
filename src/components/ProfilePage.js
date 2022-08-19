
import React from 'react'

export default function ProfilePage() {
  return (
    <div>Profile Page</div>
  )
}




// import React, {useEffect, useState} from 'react'
// import Spinner from '../common/Spinner';
// import profileService from "../services/profileService"
// import {Profile} from "../common/profile"

// export default function HomePage({ user }) {

//   const [name, setName] = useState('');
//   const [surname, setSurname] = useState('');
//   const [idNumb, setIdNumber] = useState('');
//   const [language, setLanguage] = useState('');
//   const [email, setEmail] = useState('');
// const [passcode, setPasscode] = useState('');
//   const [isSA, setSouthAfrican] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [fetching, setFetching] = useState(false)

//   useEffect(() => {
//     fetchProfile();
//   },[]);
  
  
//   async function fetchProfile(){
//     setFetching(true)
    
//     try{
//       const profile = await profileService.readProfile(user)
//       if(profile) {
//         setName(profile.name);
//         setSurname(profile.surname);
//         setIdNumber(profile.idNumb);
//         setLanguage(profile.language);
//         setEmail(profile.email);
//         setPasscode(profile.passcode);
//         setSouthAfrican(profile.isSA);
//         setPhoneNumber(profile.phoneNumber);
//       } 
//       } catch(err) {
//         console.log(err)
  
//     }
//     setFetching(false)
//   }

//   async function saveProfile(e) {
//     e.preventDefault();

//     const profile = new Profile({
//         id: user.uid,
//         name: name,
//         surname: surname,
//         idNumb: idNumb,
//         language: language,
//         email: email,
//         passcode: passcode,
//         isSA: isSA,
//         phone: phoneNumber
//     });

//     try{
//         await profileService.saveProfile(profile)
//     }catch(err){
//         console.log(err)
//     }
// }

//   return (
//     <div className="container mt-3">
//     {
//     fetching ?
//     <div className="text-center">
//       <Spinner />
//       </div>
//       :
//     <div className="card">
//       <div className="card-header">
//         <h1 className="mb-0">Create Profile</h1>
//       </div>
//       <div className="card-body">
//       <form onSubmit={saveProfile} className="row g-3">
//         <div className="col-md-6">
//           <label  className="form-label">
//             Name
//           </label>
//           <input 
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           type="text" className="form-control" />
//         </div>
//         <div className="col-md-6">
//           <label className="form-label">
//             Surname
//           </label>
//           <input
//             value={surname}
//             onChange={(e) => setSurname(e.target.value)}
//             type="text"
//             className="form-control"
//           />
//         </div>
//         <div className="col-12">
//           <label className="form-label">
//             Identity Number (ID Number)
//           </label>
//           <input
//           value={idNumb}
//           onChange={(e) => setIdNumber(e.target.value)}
//             type="text"
//             className="form-control"
//           />
//         </div>
//         <div className="col-12">
//           <label className="form-label">
//            Email
//           </label>
//           <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             className="form-control"
//           />
//         </div>
//         <div className="col-12">
//           <label className="form-label">
//            Password
//           </label>
//           <input
//           value={passcode}
//           onChange={(e) => setPasscode(e.target.value)}
//             type="password"
//             className="form-control"
//           />
//         </div>
        
//         <div className="col-md-4">
//           <label className="form-label">
//            Language
//           </label>
//           <input
//           value={language}
//           onChange={(e) => setLanguage(e.target.value)}
//             type="text"
//             className="form-control"
//           />
//         </div>
//         <div className="col-md-4">
//           <label className="form-label">
//            South African
//           </label>
//           <input 
//           value={isSA}
//           onChange={(e) => setSouthAfrican(e.target.value)}
//           type="text" className="form-control"  />
//         </div>
//         <div className="col-md-4">
//           <label  className="form-label">
//             Phone Number
//           </label>
//           <input 
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//           type="text" className="form-control"  />
//         </div>
//         <div className="col-12">

//         </div>
//         <div className="col-12 d-grid">
//           <button type="submit" className="btn btn-success">
//               Save Profile
//           </button>
//         </div>
//       </form>
//       </div>
//     </div>
// }
//   </div>
// );
  
// }
