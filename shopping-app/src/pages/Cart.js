import React, { useContext } from "react";
import UserContext from "../store/user-context";
import { Container, Col, Row, ListGroup, Button } from "react-bootstrap";
import CartItem from "../Components/cart/CartItem";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Cart() {
  const currentUser = useContext(UserContext);

  const cart = currentUser.cart;

  let allItems = "Your cart is empty";
  let priceList = [];
  let totalPrice = 0;

  function removeItemHandler(productid) {
    currentUser.removeFromCart(productid);
    toast.error("Product Removed", {
      theme: "dark",
    });
  }

  if (cart.length) {
    allItems = cart.map((item) => {
      priceList.push({ name: item.name, price: item.price });
      totalPrice += parseFloat(item.price);

      return (
        <Col key={item._id} lg={8} md={8}>
          <CartItem
            name={item.name}
            price={item.price}
            img={item.imgUrl}
            id={item._id}
            removeItem={removeItemHandler}
          />
        </Col>
      );
    });
  }

  const inform = ()=>{
    toast.info("Currently, We Do Not Serve Buying",{
      theme:"dark"
    })
  }
  
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        paddingBottom: "1rem",
      }}
    >
      <Row>
        <Col lg={8} md={6}>
          <Col className="justify-content-md-center">{allItems}</Col>
        </Col>
        <Col lg={4} style={{ marginTop: "1rem" }}>
          <ListGroup>
            {priceList.map((item) => (
              <ListGroup.Item key={item._id}>
                <strong>{item.name}</strong> -{" "}
                <span className="heading">&#8377;{item.price}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h4 style={{ margin: "1rem" }}>
            Total Amount is : &#8377;{totalPrice}
          </h4>
          <Button
            style={{
              backgroundColor: "#616e7c",
              border: "none",
              outline: "none",
              justifyContent: "center",
              textAlign: "center",
              marginLeft: "0.5rem",
            }}
            onClick={inform}
          >
            <Link className="links" to={"/"}>
              <b>Buy Now</b>
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
export default Cart;
