import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { remove } from '../store/cartSlice';

export default function Cart() {
  const productCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeToCart = (id) => {
    dispatch(remove(id));
  };
  return (
    <div className="row">
      {productCart.map((prod) => (
        <div className="col-md-3" style={{ marginBottom: '10px' }}>
          <Card className="h-100">
            <div className="text-center">
              <Card.Img
                variant="top"
                src={prod.image}
                style={{ width: '100px', height: '100px' }}
              />
            </div>
            <Card.Body>
              <Card.Title>{prod.title}</Card.Title>
              <Card.Text>INR: {prod.price}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="danger" onClick={() => removeToCart(prod.id)}>
                Remove Item
              </Button>
            </Card.Footer>
          </Card>
        </div>
      ))}
    </div>
  );
}
