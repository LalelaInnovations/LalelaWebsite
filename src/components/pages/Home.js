import React from 'react';
import Navibar from '../Navibar';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';

import './Home.css'

export default function Home() {
  let navigate = useNavigate() 
  function navToRegister() {
    navigate('/');
  }
  return ( 
    <div className='container'>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="blackbg2.jpeg"
          alt="First slide"
        />
        
        <Carousel.Caption>
          <h1>LALELA</h1>
          <p>Affordable solution for hearing healthcare.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="blackbg2.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>CONVENIENT</h1>
          <p>Sophisticated hear testing technology that fits into your pocket.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="blackbg2.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>ACCESSIBLE</h1>
          <p>
            Test patient hearing anywhere with the latest in audiology technology.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="blackbg2.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>COMPREHENSIVE</h1>
          <p>
            Integrate patient information and communication all from one app.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);
}
