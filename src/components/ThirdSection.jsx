import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import {images} from '../assets/data'
const ThirdSection = () => {
  return (
    <div className='third-section'>
      <div className='content text-center mx-auto'>
        <h2>Customer Gallery</h2>
        <Row>
          <Col className='mt-3' lg='3' md='4' sm='6' xs='12'>
            <img src={images.img3} alt="Error"/>
          </Col>
          <Col className='mt-3' lg='3' md='4' sm='6' xs='12'>
          <img src={images.img4} alt="Error"/>
          </Col>
          <Col className='mt-3 hide-md-only' lg='3' md='4' sm='6' xs='12'>
          <img src={images.img5} alt="Error"/>
          </Col>
          <Col className='mt-3' lg='3' md='4' sm='6' xs='12'>
          <img src={images.img8} alt="Error"/>

          </Col>
          </Row>
          <Button>View more </Button>
      </div>
      
    </div>
  );
};

export default ThirdSection;