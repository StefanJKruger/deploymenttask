import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import Chips from '../ProductPage/simbachips.jpg'

//Landing page function to always appear first upon arrival
const LandingPage = () => {
  return (
    <Container className="landing-container">
      <Row className="align-items-center">
        <Col md={6}>
          <h1>Welcome to Mzanzi Traders</h1>
          <p className="lead">
            Discover our amazing local products. Proudly South African!
          </p>
          <Button as={Link} to="/products" variant="primary" size="lg">
            Shop Now
          </Button>
        </Col>
        <Col md={6}>
          <img
            src={Chips}
            alt="Featured products"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;