import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Shopping Cart</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button
            style={{
              backgroundColor: '#616e7c',
              border: 'none',
              outline: 'none',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Link className="links" to={'/'}>
              <b>Go To Homepage</b>
            </Link>
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">All rights reserved.</Card.Footer>
      </Card>
    </div>
  );
}

export default Footer;
