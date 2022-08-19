import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { exampleUser } from '../App';

function Profile(props) {

  return (
    <div>
      <Card>
        <Card.Header><h1>Dr. {exampleUser.name} {exampleUser.surname}</h1></Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col><i><b>Email:</b></i> {exampleUser.email}</Col>
              <Col><i><b>Phone:</b></i> {exampleUser.phone}</Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Profile