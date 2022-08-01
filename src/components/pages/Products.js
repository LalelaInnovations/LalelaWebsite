import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Products() {
  let navigate = useNavigate() 
  function navToRegister() {
    navigate('/Products');
  }
  return ( 
    <div>
      Products
    </div>
    )
}
  
    
      
