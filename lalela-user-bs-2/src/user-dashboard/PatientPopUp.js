import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TestPopUp from './TestPopUp';
import testData from './FakeTestData.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

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
                    {
                        testData.map((test) => {
                            const testData = (test.testType === "Screening Test" ? test.heard : test.patientTestData);
                            const date = test.date.map((date) => 
                                (date.month + "/" + date.day + "/" + date.year));
                            const display = (test.patientID===props.patientID ? 
                                <TestPopUp
                                    patientName={props.patientName}
                                    testData={testData}
                                    testFeedback={test.feedback}
                                    testDate={date}
                                    buttonTitle={test.testType + " on " + date}
                                    testType={test.testType}
                                    />
                                : "");

                            return (
                                <Container>
                                    <Row>{display}</Row>
                                </Container>
                                )

                        }
                        )}

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