import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <Container className="landing-container">
      <Row className="align-items-center">
        <Col md={6}>
          <h1>Welcome to E-Shop</h1>
          <p className="lead">
            Discover our amazing products at great prices!
          </p>
          <Button as={Link} to="/products" variant="primary" size="lg">
            Shop Now
          </Button>
        </Col>
        <Col md={6}>
          <img
            src="/api/placeholder/500/300"
            alt="Featured products"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;