import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PatientPopUp from './PatientPopUp';
import ChangeButton from './ChangeButton';

function UserPopUp(props) {

    const [ show, setShow ] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const patients = props.patients;

  return (
    <div>
        <Button variant="dark" onClick={handleShow}>
            VIEW/EDIT
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Dr. {props.user.name} {props.user.surname}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    <b>User ID:</b> {props.user.id} <ChangeButton edit="User ID"/> <br></br>
                    <b>Phone:</b> {props.user.phone} <ChangeButton edit="Phone"/><br></br>
                    <b>Email:</b> {props.user.email} <ChangeButton edit="Email"/> <br></br>
                    <b>Diagnostic Credits:</b> {props.user.diagnosticCredits} <ChangeButton edit="Diagnostic Credits"/> <br></br>
                    <b>Screening Credits:</b> {props.user.screeningCredits} <ChangeButton edit="Screening Credits"/><br></br>
                    <b>ID Number:</b> {props.user.idNumb} <ChangeButton edit="ID Number"/> <br></br>
                    <b>Last Payment ID:</b> {props.user.lastPaymentID} <ChangeButton edit="Last Payment ID"/> <br></br>
                    <b>Passcode:</b> {props.user.passcode} <ChangeButton edit="Passcode"/><br></br>
                    <hr></hr>
                    <b>Patients:</b> <br></br>
                    {patients.map((patient) => {
                        return (patient.admin === props.user.id ?
                                <PatientPopUp buttonTitle={patient.name + " " + patient.surname} patient={patient} tests={props.tests} doctor={props.user} />
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

export default UserPopUp