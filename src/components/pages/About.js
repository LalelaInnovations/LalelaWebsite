import React from 'react';
import Navibar from '../Navibar';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function About() {
  return (
<div className='container'>
      <Link to="/About">
      </Link>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="blackbg2.jpeg" />
        <Card.Body>
          <Card.Title style={{fontWeight: "bold"}}>Story</Card.Title>
          <Card.Text>
          The story everyone should hear. <br/>
          Lalela is a disruptive hearing testing
          solution that creates affordable and
          mobile access possible for anyone.
          Our brand creates trust between

          key stakeholders such as gatekeepers, within the medical field, whilst

          also pushing for an agenda of social
          reformation concerning those who
          would otherwise be excluded from
          hearing testing.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="blackbg2.jpeg" />
        <Card.Body>
          <Card.Title style={{fontWeight: "bold"}}>Identity Rationale</Card.Title>
          <Card.Text>
            We are sturdy, steadfast, ever-evolving and science-driven. We believe

            that knowledge is the key to human
            wellness.
          </Card.Text>
        </Card.Body>

      </Card>
      <Card>
        <Card.Img variant="top" src="blackbg2.jpeg" />
        <Card.Body>
          <Card.Title style={{fontWeight: "bold"}}>Who We Are</Card.Title>
          <Card.Text>
          
          <h1 style={{ fontSize: 17 , fontWeight: "bold"}}>MISSION</h1>

          Lalela uses digital and smart technologies to create mobile and accessible audiology testing solutions for everyone.
          <h1 style={{ fontSize: 17 , fontWeight: "bold"}}>VISION</h1>

          We’re listening for a future where
          healthy hearing is a possibility for
          everyone. 
          <h1 style={{ fontSize: 17 , fontWeight: "bold"}}>LOGLINE</h1>

          - Sophisticated hear testing technology that fits into your pocket. <br/>

          - Test patient hearing anywhere with
          the latest in audiology technology. <br/>
          - Integrate patient information and
          communication all from one app.{' '}
          </Card.Text>
        </Card.Body>

      </Card>
    
    </CardGroup>
    </div>  )
}
