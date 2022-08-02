import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';



export default function Products() {
  let navigate = useNavigate() 
  function navToRegister() {
    navigate('/Products');
  }
  return ( 
    <div className='container'>
      <h1>Products</h1>
      
      <Table bordered hover size="lg">
      <thead>
        <tr>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>            
            # <br></br> 
            # <br></br> 
            # <br></br>
            # <br></br> 
            # <br></br> 
            # <br></br> 
            # <br></br>
            # <br></br> 
            # <br></br> 
            # <br></br> 
            # <br></br>
            # <br></br> 
            # <br></br> 
            # <br></br> 
            # <br></br>
            # <br></br> 
            </td>
          <td>            
            # <br></br> 
            # <br></br> 
            # <br></br>
            # <br></br> 
            # <br></br> 
            # <br></br> 
            # <br></br>
            # <br></br> 
            # <br></br> 
            # <br></br> 
            # <br></br>
            # <br></br> 
            # <br></br> 
            # <br></br> 
            # <br></br>
            # <br></br> 
          </td>
        </tr>

      </tbody>
    </Table>
    
    </div>
    )
}
  
    
      
