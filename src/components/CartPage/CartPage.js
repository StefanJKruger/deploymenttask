import React, { useState } from 'react';
import { Container, Table, Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, setShippingMethod } from '../../redux/cartSlice';
import './CartPage.css';

const CartPage = () => {
  const [showHelp, setShowHelp] = useState(false);
  const { items, shippingMethod } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const shippingOptions = [
    { id: 'standard', name: 'Standard Shipping', price: 5.99 },
    { id: 'express', name: 'Express Shipping', price: 14.99 },
  ];

  const calculateTotal = () => {
    const itemsTotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = shippingMethod ? shippingOptions.find(opt => opt.id === shippingMethod).price : 0;
    return (itemsTotal + shipping).toFixed(2);
  };

  if (items.length === 0) {
    return (
      <Container className="cart-container">
        <div className="empty-cart">
          <h3 className="empty-cart-message">Your cart is empty</h3>
          <Button variant="primary" href="/products">Continue Shopping</Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      <Table className="cart-table" responsive>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td className="cart-item-name">{item.name}</td>
              <td className="cart-item-price">${item.price}</td>
              <td>
                <div className="cart-quantity">
                  {item.quantity}
                </div>
              </td>
              <td className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <Button 
                  variant="danger" 
                  size="sm"
                  className="remove-button"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="shipping-section">
        <h4 className="shipping-title">Shipping Method</h4>
        {shippingOptions.map(option => (
          <div key={option.id} className="shipping-option">
            <input
              type="radio"
              id={option.id}
              name="shipping"
              checked={shippingMethod === option.id}
              onChange={() => dispatch(setShippingMethod(option.id))}
            />
            <label htmlFor={option.id}>
              {option.name} (${option.price})
            </label>
          </div>
        ))}
        <Button 
          variant="info" 
          className="help-button"
          onClick={() => setShowHelp(true)}
        >
          Need Help with Shipping?
        </Button>
      </div>

      <div className="total-section">
        <h3 className="total-amount">Total: ${calculateTotal()}</h3>
        <Button variant="primary" className="checkout-button">
          Proceed to Checkout
        </Button>
      </div>

      <Modal show={showHelp} onHide={() => setShowHelp(false)} className="help-modal">
        <Modal.Header closeButton>
          <Modal.Title>Shipping Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="shipping-info">
            <h5>Standard Shipping</h5>
            <p>Delivery within 5-7 business days</p>
            <p>Tracking included</p>
            <p>Best value option</p>
          </div>
          
          <div className="shipping-info">
            <h5>Express Shipping</h5>
            <p>Delivery within 2-3 business days</p>
            <p>Priority handling</p>
            <p>Free reschedule</p>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default CartPage;