import React from 'react'
import './Contact.css'
import { FiMail } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Contact() {
  return (
    <><div className='container'>
      <h2>Contact Us</h2>
      <h3>
        <p1><FiMail style={{ color: (51, 232, 135) }} /></p1>
        info@lalelainnovations.com
      </h3>
    </div>
    <div className='form'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" />
           
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="First name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Last name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Message" />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Subscribe to our newsletter and be the first to know when we launch." />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div></>
          )

}
