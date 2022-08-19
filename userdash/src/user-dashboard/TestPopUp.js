import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ScreeningData from './ScreeningData';
import DiagnosticData from './DiagnosticData';
// import TestResult from './TestResult';

function TestPopUp(props) {
    const [ show, setShow ] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const name = props.patientName;
    const date = props.date;
    const testFeedback = props.testFeedback;


  return (
    <div>
        <Button variant="Secondary" onClick={handleShow}>
            {props.buttonTitle}
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title><i>{name}: {props.testType} on {date}</i></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { props.testType === "Screening Test" ? 
                    <ScreeningData 
                        patientName={name}
                        testDate={date}
                        kHzArr={props.kHzArr}
                        heard={props.testHeard}
                        passed={props.testPassed}
                        testFeedback={testFeedback}
                    /> : 
                    <DiagnosticData 
                        patientName={name}
                        audiogram={props.testAudiogram}
                        testFeedback={testFeedback}
                />}
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

export default TestPopUp