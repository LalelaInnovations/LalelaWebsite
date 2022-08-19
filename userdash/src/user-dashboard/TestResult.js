import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import ScreeningData from './ScreeningData';
import DiagnosticData from './DiagnosticData';

function TestResult(props) {
  return (
    <div>
    <Container>
        <div className="test heading">        
                <Row>
                    <Col>
                        <h3>Dr. {props.userName}</h3><br></br>
                        Telephone: {props.userPhone}<br></br>
                        Email: {props.userEmail}<br></br>
                    </Col>
                    <Col>
                        <b>TEST NO:</b><br></br>
                        {props.testNum}
                    </Col>
                </Row>
            
        </div>

        <div className="testinfo mt-5">
            <Row>
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td><b>PATIENT</b></td>
                        <td>{props.patientName}</td>
                    </tr>
                    <tr>
                        <td><b>DATE</b></td>
                        <td>{props.testDate}</td>
                    </tr>
                    <tr>
                        <td><b>TEST TYPE</b></td>
                        <td>{props.testType}</td>
                    </tr>
                    <tr>
                        <td><b>FEEDBACK</b></td>
                        <td>{props.testFeedback}</td>
                    </tr>
                </tbody>
            </Table>
            </Row>
        </div>

        <Row>
        <div className="data mt-5">
            {props.testType==="Screening Test" ? <ScreeningData/> : <DiagnosticData/>}
        </div>
        </Row>

    </Container>
    </div>
  )
}

export default TestResult