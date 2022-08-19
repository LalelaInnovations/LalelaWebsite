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

  return (
    <div>
        <Container className="mt-3 mb-5">
                <Row>
                    <Col><h1>Patients</h1></Col>
                    
                    <Col><PatientSearchBar cardPatient={patients} tests={props.testData} userData={props.userData} data={patients}/></Col>
                </Row>
            <Container className="mt-3">

                {patients.map((patient) => {
                        return (
                            <Row classname="mt-3">
                                <Col>
                                    <PatientCard cardPatient={patient} tests={props.testData} userData={props.userData} />
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