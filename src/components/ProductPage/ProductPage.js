import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import "./ProductPage.css";
import Aromat from "./aromat.jpg";
import Chappies from "./chappies.jpg";
import Chutney from "./chutney.jpg";
import Matches from "./matches.jpg";
import Sunlight from "./sunlight.jpg";

//Creating product page function for all products available
const ProductPage = () => {
  const dispatch = useDispatch();
  const products = [
    {
      //Adding products
      id: 1,
      name: "Aromat Original",
      price: 57.99,
      description: "45g",
      image: Aromat,
    },

    {
      id: 2,
      name: "Chappies",
      price: 174.99,
      description: "100pc",
      image: Chappies,
    },

    {
      id: 3,
      name: "Chutney",
      price: 93.99,
      description: "1.1kg",
      image: Chutney,
    },

    {
      id: 4,
      name: "Tiger Matches",
      price: 34.99,
      description: "10pc",
      image: Matches,
    },

    {
      id: 5,
      name: "Moonlight Liquid",
      price: 147.99,
      description: "750ml",
      image: Sunlight,
    },
  ];

  return (
    <Container className="product-container">
      <h2 className="product-title">Our Products</h2>
      <Row className="product-grid">
        {products.map((product) => (
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
                  <p className="product-price">R{product.price.toFixed(2)}</p>
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
