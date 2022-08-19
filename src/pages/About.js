import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
//TBD Later
import pic1 from '../assets/created/hearing1.png';
// import pic2 from '../assets/created/hearing2.jpg';
// import pic3 from '../assets/created/hearing3.jpg';
import pic4 from '../assets/created/user2c.png';
// import pic5 from '../assets/created/user1.jpeg';
//
import './About.css'

export default function About() {
  return (
  <div className='container'>

    <div className="card mb-4 mt-5 border-light" id="ins">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={pic1} className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title fs-2 pt-3 trans-text"><strong>Inspiration</strong></h5>
            <p className="card-text mt-3">
              Lalela is a disruptive hearing testing
              solution that creates affordable and
              mobile access possible for anyone. <br/><br/>
              Our brand creates trust between
              key stakeholders such as gatekeepers, within 
              the medical field, whilst also pushing 
              for an agenda of social
              reformation concerning those who
              would otherwise be excluded from
              hearing testing.
              </p>
            <p className="card-text text-muted"><em>The story everyone should hear.</em></p>
          </div>
        </div>
      </div>
    </div>

    <div className="card mb-3 border-light" id="iden" 
    // style="max-width: 540px;"
    >
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title fs-2 pt-4 trans-text-rev"><strong>Identity</strong></h5>
            <p className="card-text mt-4">
              We are sturdy, steadfast, ever-evolving and science-driven. <br/><br/>
              We believe that knowledge is the key to human wellness.
            </p>
            <p className="card-text text-muted mt-4"><em>Technology Intersects Accessibility</em></p>
          </div>
        </div>
        <div className="col-md-4">
          <img src={pic4} className="img-fluid rounded-start" alt="..."/>
        </div>
      </div>
    </div>

    <CardGroup className="my-4 con" id="mvl">
      <Card className="border-light me-3 card-mvl rounded">
        <Card.Body className="">
          <Card.Title className="fs-3 hovtext mt-3" style={{fontWeight: "bold"}}>Mission</Card.Title>
          <Card.Text className="text-dark mb-3" >
            Lalela uses digital and smart technologies to create mobile 
            and accessible audiology testing solutions for everyone.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="border-light mx-3 card-mvl rounded">
        <Card.Body>
          <Card.Title className="fs-3 hovtext mt-3" style={{fontWeight: "bold"}}>Vision</Card.Title>
          <Card.Text className="text-dark pt-2 mb-3" >
            We’re listening for a future where
            healthy hearing is a possibility for
            everyone. 
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="border-light ms-3 card-mvl rounded">
        <Card.Body>
          <Card.Title className="fs-3 hovtext mt-3" style={{fontWeight: "bold"}}>Logline</Card.Title>
          <Card.Text className="text-dark pt-2 mb-3" >
            Sophisticated hear testing technology that fits into your pocket. <br/>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>

  </div> 
  )
}
