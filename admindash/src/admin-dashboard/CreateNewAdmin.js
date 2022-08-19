import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateNewAdmin(props) {

    const [userName, setUserName] = useState('')
    const navigate = useNavigate();

async function onButtonClicked(event){
    event.preventDefault();
    
    navigate("/admin-create-new-admin")
    userCreated();

    console.log("clicked")
    

}

async function userCreated(){
    
}

  return (
    <div className='container mt-4'>
   
     <button onClick={onButtonClicked} type="button" className="btn btn-outline-info col-12 d-grid">Create New Admin</button> 
    

   </div>
  )
}