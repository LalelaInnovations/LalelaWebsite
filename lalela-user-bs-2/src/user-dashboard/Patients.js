import React, { useEffect, useState } from 'react';

import PatientSearchBar from './PatientSearchBar';
import PatientCard from './PatientCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import patientElement from './patientElement';
// import patientService from '../services/patient.service';

function Patients(props) {

    const patients = props.data;
    console.log(patients);

    // const user = props.doctor;
    // console.log(user);

    // const [patients, setPatients] = useState([]);

    // useEffect(() => {
    //     fetchPatients();
    // }, []);


    // async function fetchPatients() {
    //     try {
    //         const patients = await patientService.readPatients(user);
    //         setPatients(patients);
    //     } catch(err) {
    //         console.log(err);
    //     }
    // }
    // console.log(patients);


  return (
    <div>
        <Container className="mt-3 mb-5">
                <Row>
                    <Col><h1>My Patients</h1></Col>
                    <Col><PatientSearchBar data={patients}/></Col>
                </Row>
            <Container className="mt-3">
                {/* need to make a new array which holds patients in alphabetical order */}
                {patients.map((patient) => {
                        console.log(patient.name);
                        return (
                            <Row classname="mt-3">
                                <Col>
                                    <PatientCard cardPatient={patient} tests={props.testData}/>
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