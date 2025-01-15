import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import './ProductPage.css';
import Aromat from './aromat.jpg';
import Chappies from './chappies.jpg';
import Chutney from './chutney.jpg';
import Matches from './matches.jpg';
import Sunlight from './sunlight.jpg';

//Creating product page function for all products available
const ProductPage = () => {
  const dispatch = useDispatch();
  const products = [
    { //Adding products
      id: 1,
      name: 'Product 1',
      price: 29.99,
      description: 'A great product',
      image: Aromat,
    },

    {
        id: 2,
        name: 'Product 2',
        price: 259.99,
        description: 'A great product',
        image: Chappies,
    },

    {
        id: 3,
        name: 'Product 3',
        price: 75.00,
        description: 'A great product',
        image: Chutney,
    },

    {
        id: 4,
        name: 'Product 4',
        price: 329.99,
        description: 'A great product',
        image: Matches,
    },

    {
        id: 5,
        name: 'Product 5',
        price: 319.99,
        description: 'A great product',
        image: Sunlight,
    },

    
  ];

  return (
    <Container className="product-container">
      <h2 className="product-title">Our Products</h2>
      <Row className="product-grid">
        {products.map(product => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="product-card h-100">
              <div className="image-container">
                <Card.Img 
                  variant="top" 
                  src={product.image} 
                  className="product-image"
                  alt={product.name}
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="product-name">{product.name}</Card.Title>
                <Card.Text className="product-description">
                  {product.description}
                </Card.Text>
                <div className="mt-auto">
                  <p className="product-price">${product.price.toFixed(2)}</p>
                  <Button
                    variant="primary"
                    className="w-100 add-to-cart-btn"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductPage;