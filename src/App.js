import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home.js';
import About from './pages/About.js';
import Product from './pages/Product';
import Contact from './pages/Contact.js';
import ContactSubmission from './pages/ContactSubmission';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import NavbarComponent from './components/Navbar.js';
import Footer from './components/Footer.js';
import GetApp from './pages/GetApp';
import ToS from './pages/ToS';
import Privacy from './pages/Privacy';

export default function App() {

  return (
    <div className='main app'>
    <BrowserRouter>
        <NavbarComponent></NavbarComponent>
        <Routes className="page-default">
          {/* PUBLIC PAGES */}
            <Route path = '/' element = {<Home />} />
            <Route path = '/about' element = {<About />} />
            <Route path = '/products' element = {<Product />} />
            <Route path = '/contact' element = {<Contact />} />
            <Route path = '/submission_successful' element = {<ContactSubmission />} />
            <Route path = '/login' element = {<Login />} />
            <Route path = '/register' element = {<Register />} />
            {/* <Route path = '/get_app' element = {<GetApp />}/> */}
            <Route path = '/privacy' element = {<Privacy />} />
            <Route path = '/terms_and_conditions' element = {<ToS />} />

            {/* New Routes are added here */}


          {/* PRIVATE PAGES */}

        </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </div>
  )
}