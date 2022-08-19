import React, { useEffect, useState } from 'react';

import PatientSearchBar from './PatientSearchBar';
import UserCard from './UserCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import patientElement from './patientElement';
// import patientService from '../services/patient.service';

function Users(props) {

    const users = props.data;
    const patients = props.patientData;
    const tests = props.testData;

  return (
    <div>
        <Container className="mt-3 mb-5">
                <Row>
                    <Col><h1>Users</h1></Col>
                    <Col><PatientSearchBar data={users}/></Col>
                </Row>
            <Container className="mt-3">
                {/* need to make a new array which holds patients in alphabetical order */}
                {users.map((user) => {
                        return (
                            <Row classname="mt-3">
                                <Col>
                                    <UserCard user={user} patients={patients} tests={tests}></UserCard>
                                </Col>
                            </Row>
                        )
                })}
            </Container>
        </Container>
    </div>
  )
}

export default Users;