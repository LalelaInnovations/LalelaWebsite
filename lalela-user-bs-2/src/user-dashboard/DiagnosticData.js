import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from './Profile';

function DiagnosticData(props) {
  return (
    <div>
        <Container className="p">
            <Row>(lalela logo)</Row>
            <Row><h1>Diagnostic Hearing Test Report</h1></Row>
            <Row>
                <Col><b>Patient Name:</b> {props.patientName}</Col>
            </Row>
        </Container>

        <hr></hr>

        <Container>
            <Row>
              <h4>Pure Tone Audiometry</h4>
            </Row>
            <Row>
                <i>Audiogram Data: {props.audiogram}</i>
                
            </Row>
        </Container>

        <hr></hr>

        <Container>
            <Row>Remarks:</Row>
            <Row>{props.feedback}</Row>
        </Container>

        <hr></hr>

        <Profile></Profile>

    </div>
  )
}

export default DiagnosticData