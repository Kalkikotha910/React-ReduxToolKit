import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';
export default function Product() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);
  // const [products, getProducts] = useState([]);

  useEffect(() => {
    // fetch('https://fakestoreapi.com/products')
    //   .then((data) => data.json())
    //   .then((res) => getProducts(res));

    // disptch an action for fetchproducts
    dispatch(getProducts());
  }, []);
  if (status === 'loading') {
    return <p>Loading....</p>;
  }
  if (status === 'error') {
    return (
      <Alert key="danger" variant="danger">
        Something went wrong!
      </Alert>
    );
  }
  const addtoCart = (product) => {
    dispatch(add(product));
  };
  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">
        {products.map((prod) => (
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
                <Button variant="primary" onClick={() => addtoCart(prod)}>
                  Add to cart
                </Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
