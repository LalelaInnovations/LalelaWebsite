import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Users from './Users';
import Patients from './Patients';
import TestResults from './TestResults';
import Profile from './Profile';

function NavBarComp(props) {

    const users = props.users;
    const tests = props.tests;
    const patients = props.patients;
    const admin = props.admin;

    return (
        <Router>    
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Hello, Dr. {admin.surname}</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"./"}>Users</Nav.Link>
                        <Nav.Link as={Link} to={"./patients"}>Patients</Nav.Link>
                        <Nav.Link as={Link} to={"./testresults"}>Test Results</Nav.Link>
                        <Nav.Link as={Link} to={"./profile"}>New Profile</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Routes> 
                    <Route path="/" element={<Users data={users} patientData={patients} testData={tests} />} />                  
                    <Route path="/patients" element={<Patients data={patients} testData={tests} userData={users} />}/>
                    <Route path="/testresults" element={<TestResults testData={tests} patientData={patients} userData={users} />}/>
                    <Route path="/profile" element={<Profile user={props.user}/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default NavBarComp;