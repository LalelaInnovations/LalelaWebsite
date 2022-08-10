import React from 'react'
import PatientData from './FakePatientData.json';
import TestData from './FakeTestData.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleBar from './ToggleBar';
import TestTable from './TestTable';

function TestResults() {

  return (
    <div>
      <Container className="mt-3 mb-5">
        <Row>
          <Col><h1>Tests</h1></Col>
          <Col><ToggleBar filterBy="date"/></Col>
          <Col><ToggleBar filterBy="patient"/></Col>
          <Col><ToggleBar filterBy="test type"/></Col>
        </Row>
      </Container>
      <Container>
        <TestTable tests={TestData} patients={PatientData}/>
      </Container>
    </div>
  )
}

export default TestResults