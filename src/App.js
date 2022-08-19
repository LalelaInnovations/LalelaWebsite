import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Product from './pages/Product';
import Contact from './pages/Contact.js';
import ContactSubmission from './pages/ContactSubmission';

import Login from './pages/Login.js';
import Register from './pages/Register.js';

import NavbarComponent from './components/Navbar.js';
import Footer from './components/Footer.js';
// import GetApp from './pages/GetApp'; // When app download page is supported

import ToS from './pages/ToS';
import Privacy from './pages/Privacy';

import Spinner from './common/Spinner';
import RequiresAuth from './common/RequiresAuth';
import ProfilePage from './components/ProfilePage';
import AdminProfilePage from './components/AdminProfilePage';
import AdminRegister from './components/AdminRegister';
import ForgetPassword from './components/ForgetPassword';

import { auth } from './firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';


export default function App() {

  const [user, setUser] = useState(null);
  const [userUpdated, setUserUpdated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      setUser(user);
     setUserUpdated(true)
    });
  }, [])


  return (
    <div className='main app background-tile '>
    <BrowserRouter>
        <NavbarComponent user={user}/>
        {
          userUpdated ? 
     
          <Routes className="page-default ">
          {/* PUBLIC PAGES */}

            <Route path = '/' element = {<Home />} />
            <Route path = '/about' element = {<About />} />
            <Route path = '/products' element = {<Product />} />
            <Route path = '/contact' element = {<Contact />} />
            <Route path = '/submission_successful' element = {<ContactSubmission />} />
            <Route path = '/login' element = {<Login />} />
            <Route path = '/register' element = {<Register user={user}/>} />
            <Route path = '/forgot_password' element = {<ForgetPassword />} />
            {/* <Route path = '/get_app' element = {<GetApp />}/> */}
            <Route path = '/privacy' element = {<Privacy />} />
            <Route path = '/terms_and_conditions' element = {<ToS />} />

            {/* New Routes are added here */}

          {/* PRIVATE PAGES */}

            {/* User Dashboard Pages */}
            <Route path='/home' element={ <RequiresAuth user={user}><ProfilePage /></RequiresAuth> } /> 

            {/* Admin Dashboard Pages */}
            <Route path='/admin' element={ <AdminProfilePage user={user} /> } /> 
            <Route path='/register-admin' element={ <AdminRegister user={user} /> } /> 

            
            {/* New Functions are added here */}

          </Routes>

          :
          
          <>
           {/* Loading Page */}
           <div className='mt-3 text-center'>
            <Spinner />
            </div>
          </>
        }
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}