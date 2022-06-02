import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
      <Card className="cardDiv text-black-50 notfoundpage">          
        <div className="notfound">
        <h1 className="notfoundtext">404</h1>        
        <Card.Title>page not found</Card.Title>
        <Button
          style={{
            backgroundColor: "#616e7c",
            border: "none",
            outline: "none",
            justifyContent: "center",
            textAlign: "center",
            fontWeight: "500",
          }}
        >
          <Link className="links" to={'/'}>Go to Homepage</Link>
        </Button>
        </div>
      </Card>
  );
}

export default NotFound;
