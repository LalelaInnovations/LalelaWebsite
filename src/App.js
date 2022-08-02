import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact.js';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navibar from './components/Navibar';


<<<<<<< HEAD
function App() {
  return (
    <div className="App">
      
          Hi
      
    </div>
  );
}
=======
export default function App() {
  return (
    <div>
      <Navibar></Navibar>
>>>>>>> c889c006801dd872d6c6a9567bdb9524704480bd

    <BrowserRouter>
      <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/About' element = {<About />} />
          <Route path = '/Products' element = {<Products />} />
          <Route path = '/Contact' element = {<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}