import React from 'react'
import PatientData from './FakePatientData.json';
import PatientSearchBar from './PatientSearchBar';
import PatientCard from './PatientCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import patientElement from './patientElement';

function Patients() {

  return (
    <div>
        <Container className="mt-3 mb-5">
                <Row>
                    <Col><h1>My Patients</h1></Col>
                    <Col><PatientSearchBar data={PatientData}/></Col>
                </Row>
            <Container className="mt-3">
                {/* need to make a new array which holds patients in alphabetical order */}
                {PatientData.map((value, key) => {
                        return (
                            <Row classname="mt-3">
                                <Col>
                                    <PatientCard patientName={value.name + " " + value.surname} phoneNum={value.phone} email={value.email} id={value.patient} />
                                </Col>
                            </Row>
                        )
                })}
            </Container>
        </Container>
    </div>
  )
}

export default Patients;