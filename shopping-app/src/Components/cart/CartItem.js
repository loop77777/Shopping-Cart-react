import React from 'react';
import { Card, Button } from 'react-bootstrap';


function CartItem(props) {
  return (
    <div style={{ margin: '.5rem',justifyContent: 'center'}}>
    <Card
      style={{
        display: 'flex',        
        padding: '.2rem',
        backgroundColor: '#e4e7eb',
        alignContent:'center',
      }}
    >
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Title><b>₹{props.price}</b></Card.Title>
        <Button
          style={{
            backgroundColor: '#515E67',
            border: 'none',
            borderRadius: '2rem',
            fontWeight: '500',
            textAlign: 'center',
          }}
        >
          <span className="links" onClick={() => props.removeItem(props.id)}>
            remove
          </span>
        </Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default CartItem;
