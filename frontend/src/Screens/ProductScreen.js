
import Rating from '../components/Rating';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import { listProductDetails } from '../actions/productActions';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from "react";
import Loader from '../components/Loader.js';
import Message from '../components/Message.js';


const ProductScreen = ({ match }) => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails);
  const {loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id))
  }, [dispatch, id]);

  
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>GO Back</Link>
      {loading ? <Loader /> : error ? <Message varaint='danger'>{error}</Message> :(
        <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating 
                value={product.rating} 
                text={`${product.numReviews} reviews`} 
              />
            </ListGroup.Item>

            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>

            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Price: 
                  </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    Status: 
                  </Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button className='btn btn-block w-100'  type='button' disabled={ product.countInStock === 0 }>
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      )}
      
    </>
  );
}

export default ProductScreen;