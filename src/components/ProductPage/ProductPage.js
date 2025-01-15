import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import './ProductPage.css';

const ProductPage = () => {
  const dispatch = useDispatch();
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      description: 'A great product',
      image: '/api/placeholder/200/200',
    },
    // Add more products...
  ];

  return (
    <Container className="product-container">
      <h2>Our Products</h2>
      <Row>
        {products.map(product => (
          <Col key={product.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  {product.description}
                  <br />
                  <strong>R{product.price}</strong>
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductPage;