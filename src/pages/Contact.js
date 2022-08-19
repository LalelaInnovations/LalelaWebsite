import React, { useState } from "react";
import './Contact.css'
import { FiMail } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'; 
import { Message } from '../objects/Message';
import Accordion from 'react-bootstrap/Accordion';

import { collection, addDoc } from "firebase/firestore"; 
import { firestore } from "../firebase/firebase";


// Contact Us Page
export default function Contact(props) {
  
  const [email, setEmail] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const [subs, setSubs] = useState(false);

  const [error, setError] = useState("");


  //When form is submitted
  async function onContact(event) {
    event.preventDefault();
    const message = new Message(email, fName, lName, subject, msg, subs);
    const date = new Date();
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
    const [hour, minutes] = [date.getHours(), date.getMinutes()];

    try {
      const docRef = await addDoc(collection(firestore, "UserMessages"), {
        email: message.email,
        fName: message.fName,
        lName: message.lName,
        subject: message.subject,
        msg: message.msg,
        subs: message.subs,
        time: year + "/" + month + "/" + day + " " + hour + ":" + minutes,
      });
      console.log("Document written with ID: ", docRef.id);
      navBack();

    } catch (err) {
      console.log(err);
      setError(err.code + ". Please try again");
    }
    setEmail("");
    setFName("");
    setLName("");
    setMsg("");
    setSubs("");
  }

  let navigate = useNavigate() 
  function navBack() {
    navigate('/submission_successful');
  }

  return (
    <>
    <div className='container mb-3'>

      {/* CONTACT PAGE HEADER */}
      <div id="contact_head">
        <div className='fs-1 fs-bolder'>Contact Us</div>
          <div className='text-dark fw-light'>
            <p1><FiMail style={{ color: (51, 232, 135) }} className="mb-1" /></p1>
            info@lalelainnovations.com
          </div>
        </div>
        <div className="mt-4 text-align-center" id="contact_desc">
          Got a question not in the FAQs below? Drop us a message
        </div>

        {/* CONTACT PAGE FORM */}
        <div className='container form' id="form">
          <Form onSubmit={onContact}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" autoComplete="email" 
                onChange={(input) => setEmail(input.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicFName">
              <Form.Control type="text" placeholder="First name" autoComplete='given-name' 
                onChange={(input) => setFName(input.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLName">
              <Form.Control type="text" placeholder="Last name" autoComplete='family-name'
                onChange={(input) => setLName(input.target.value)}/>
            </Form.Group>
            

            <Form.Group className="mb-3">
                <select className="form-select" aria-label="Default select example" onChange={(input) => setSubject(input.target.value)}>
                  <option defaultValue={"General Inquiry"} value="General Inquiry">General Inquiry</option>
                  <option value="Purchasing Individual Pay-as-you-go Plan">Purchasing Individual Pay-as-you-go Plan</option>
                  <option value="Purchasing Individual Preloaded Plan">Purchasing Individual Preloaded Plan</option>
                  <option value="Purchasing Organizational Plan">Purchasing Organizational Plan</option>
                  <option value="Tech Support">Tech Support</option>
                  <option value="Career Inquiry">Career Inquiry</option>
                  <option value="Bug Report">Report Unexpected/Unusual Behavior or Bugs</option>
                </select>
            </Form.Group>
        
            <Form.Group className="mb-3" controlId="formMsg">
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder='Message to us'
                onChange={(input) => setMsg(input.target.value)}/>
            </Form.Group>
        
            <Form.Group className="mb-3 same-line" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" className="form-check-label m-2 checkbox-inline" 
                label="Subscribe to our mail-list for updates on Lalela Innovations" 
                onClick={(input)=> setSubs(input.target.checked)}/>
            </Form.Group>

            <Button variant="primary p-1 form-control" type="submit" 
                disabled={!(email && fName && msg)}>
              Submit
            </Button>

          </Form>

          {/* FAQ Section */}
          <div className="mt-5">
            <p className="fs-3 text-muted">Frequently Asked Questions</p>
          </div>

          <div>
            <Accordion className="text-start" id="faqs">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Is Lalela a certified audiological product?</Accordion.Header>
              <Accordion.Body className="faq-answers">
                Yes, Lalela has been approved as a Class 2 medical device for hearing screening and testing by SAHPRA.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Can Lalela be used on both iOS and Android phones?</Accordion.Header>
              <Accordion.Body className="faq-answers">
                Lalela is currently available on Android only, but the iOS version will soon be available.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>What types of tests can you perform with Lalela?</Accordion.Header>
              <Accordion.Body className="faq-answers">
                Both screening (4 frequency) and air conduction (250Hz-16KHz) diagnostic testing can be performed with Lalela
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Will I be able to use Lalela without much experience?</Accordion.Header>
              <Accordion.Body className="faq-answers">
                Lalela takes ease-to-use when designing our products. Anyone with minimal training can use Lalela to perform a hearing test.
              </Accordion.Body>
            </Accordion.Item> 
            <Accordion.Item eventKey="4">
              <Accordion.Header>What is the difference between the mobile app and website?</Accordion.Header>
              <Accordion.Body className="faq-answers">
                Lalela Mobile app is designed to be used in remote settings where services are limited. With the website, Lalela can be used almost anywhere.
              </Accordion.Body>
            </Accordion.Item>
            {/* new FAQs are added here */}
          </Accordion>
        </div>
      </div>
    </div>
  </>
  )
}
