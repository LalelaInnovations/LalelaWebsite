import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TestPopUp from './TestPopUp';

function PatientPopUp(props) {
    const [ show, setShow ] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <Button variant="dark" onClick={handleShow}>
            VIEW RECORDS
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.patientName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    <b>Phone: </b>{props.patientPhone} <br></br>
                    <b>Email:</b> {props.patientEmail} <br></br>
                    <hr></hr>
                    <b>Test History:</b><br></br>
                    <TestPopUp buttonTitle="test date and type"></TestPopUp>
                    (Links to tests will appear here.)
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={handleClose}>
                    CLOSE
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
  );
}

export default PatientPopUp