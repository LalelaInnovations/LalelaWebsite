import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                <i>Here will appear the chart of diagnostic data.</i>
                {/* {props.audiogram} */}
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
                <Col className="justify-content-center">(email icon) user@email.com</Col>
                <Col className="justify-content-center">(phone icon) 123 456 789</Col>
            </Row>
        </Container>
    </div>
  )
}

export default DiagnosticData