import { Card } from 'react-bootstrap';

import React from 'react';

function ProductReviews(props) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>
          <p className="starability-result" data-rating={props.rating}>
            Rated: 3 stars
          </p>
        </Card.Title>
        <Card.Text>{props.comment}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ProductReviews;
