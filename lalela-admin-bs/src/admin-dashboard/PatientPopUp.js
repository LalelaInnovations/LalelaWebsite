import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TestPopUp from './TestPopUp';
import ChangeButton from './ChangeButton';

// import testService from '../services/test.service';
// import Col from 'react-bootstrap/Col';

function PatientPopUp(props) {
    const [ show, setShow ] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const popupPatient = props.patient;

    const tests = props.tests;

    // const [tests, setTests] = useState([]);

    // useEffect(() => {
    //     fetchUserTests();
    // }, []);

    // async function fetchUserTests() {
    //     try {
    //         const tests = await testService.readPatientTests(popupPatient);
    //         setTests(tests);
    //     } catch(err) {
    //         console.log(err);
    //     }
    // }
    // console.log(tests);

  return (
    <div>
        <Button variant="dark" onClick={handleShow}>
            {props.buttonTitle}
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.patient.name} {props.patient.surname}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    <b>Patient ID:</b> {props.patient.id} <ChangeButton edit="Patient ID"/><br></br>
                    <b>Doctor:</b> {props.doctor}, user #{props.patient.admin} <ChangeButton edit="Doctor (enter new user ID"/> <br></br>
                    <b>Phone: </b>{props.patient.phone} <ChangeButton edit="Phone"/> <br></br>
                    <b>Email:</b> {props.patient.email} <ChangeButton edit="Email"/> <br></br>
                    <b>ID Number:</b> {props.patient.idNumb} <ChangeButton edit="ID Number"/> <br></br>
                    {/* <b>South African?</b> <br>{props.patient.isSA === "true" ? "Yes" : "No"}</br> */}
                    <hr></hr>
                    <b>Test History:</b><br></br>
                    {tests.map((test) => {
                        return (props.patient.id === test.patientID ? 
                            <TestPopUp
                                buttonTitle={test.date.month + "/" + test.date.day + "/" + test.date.year}
                                patientName={props.patient.name + " " + props.patient.surname}
                                date={test.date.month + "/" + test.date.day + "/" + test.date.year}
                                testType={test.testType}
                                testId = {test.id}
                                testFeedback={test.feedback}
                                testAudiogram={test.patientTestData}
                                testkHzArr={test.kHzArr}
                                testPassed={test.passed}
                                testHeard={test.heard}
                            />
                            : "")
                    })}

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