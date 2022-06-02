import React from "react";
import { Card, Button } from "react-bootstrap";
import "../../App.css";
import { Link } from "react-router-dom";

function Product(props) {
  return (
    <div className="cardDiv">
      <Card
        style={{
          display: "flex",
          padding: ".2rem",
          backgroundColor: "#e4e7eb",
          width: "20rem",
          alignContent: "center",
        }}
      >
        <Card.Img className="img" variant="top" src={props.img} />
        <Card.Body>
          <Card.Title className="title">
            <b>{props.name}</b>
          </Card.Title>
          <Card.Text className="info">{props.desc.substr(0, 50)}</Card.Text>
          <Card.Title>₹{props.price}</Card.Title>
          <Button
            style={{
              backgroundColor: "#616e7c",
              border: "none",
              outline: "none",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Link className="links" to={`/products/${props.id}`}>
              <b>Buy Now</b>
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Product;
