import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Patients from './Patients';
import TestResults from './TestResults';
import Profile from './Profile';
import PatientInfo from './PatientInfo';

function NavBarComp({user, patients, tests}) {
    return (
        <Router>    
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Hello, Dr. {user.surname}</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"./"}>Patients</Nav.Link>
                        <Nav.Link as={Link} to={"./testresults"}>Test Results</Nav.Link>
                        <Nav.Link as={Link} to={"./profile"}>My Profile</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Routes>                    
                    <Route path="/" element={<Patients />}/>
                    <Route path={"/patient"} element={<PatientInfo />}/>
                    <Route path="/testresults" element={<TestResults />}/>
                    <Route path="/profile" element={<Profile />}/>
                </Routes>
            </div>
        </Router>
    );
}

export default NavBarComp;

