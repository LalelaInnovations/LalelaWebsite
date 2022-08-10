import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ScreeningData(props) {
  return (
    <div>
        <Container className="p">
            <Row>(lalela logo)</Row>
            <Row><h1>Hearing Screening Report</h1></Row>
            <Row>
                <Col><b>Patient Name:</b> {props.patientName}</Col>
                <Col><b>Screening Date:</b> {props.testDate}</Col>
            </Row>
        </Container>

        <hr></hr>

        <Container>
            <Row>
                <p>
                    Puretone Audiometry. A student fails the screening test if he/she does not
                    respond to any one tone (frequency) at 20dB hearing level in either ear.
                </p>
            </Row>
            <Row>
                <i>Here will appear the chart of screening data.</i>
                {/* {props.passFail} */}
            </Row>
        </Container>

        <hr></hr>

        <Container>
            <Row>Remarks:</Row>
            <Row>{props.feedback}</Row>
        </Container>

        <hr></hr>

        <Container>
            <Row className="justify-content-center">User Name</Row>
            <Row className="justify-content-center">
                <Col>user@email.com</Col>
                <Col>123 456 789</Col>
            </Row>
        </Container>


    </div>

  )
}

export default ScreeningData