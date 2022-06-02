import React, { useContext } from "react";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "../../App.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import UserContext from "../../store/user-context";
import { FiShoppingCart } from "react-icons/fi";
import { toast } from "react-toastify";


function Header() {
  const history = useHistory();
  const currentUser = useContext(UserContext);

  const { isLoggedIn, getLoggedIn, cartLength } = currentUser;

  async function userLogoutHandler(e) {
    e.preventDefault();
    await axios.get("/logout");
    getLoggedIn();
    history.push("/login");
    toast.success("Logged Out", {
      theme: "dark",
    });
  }
  return (
    <Navbar
      fixed="top"
      className="navbar"
      collapseOnSelect
      expand="lg"
      variant="light"
    >
      <Container>
        <Navbar.Brand className="heading">Shopping Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </LinkContainer>
            <LinkContainer to="/allproducts">
              <Link className="nav-link" to="/allproducts">
                Products
              </Link>
            </LinkContainer>
            {isLoggedIn === true && (
              <LinkContainer to="/new">
                <Link className="nav-link" to="/new">
                  New
                </Link>
              </LinkContainer>
            )}
          </Nav>
          <Nav>
            {isLoggedIn === false && (
              <>
                <LinkContainer to="/login">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Link className="nav-link" to="/register">
                    Sign Up
                  </Link>
                </LinkContainer>
              </>
            )}
            {isLoggedIn === true && (
              <>
                <LinkContainer to="/cart">
                  <Link className="nav-link" to="/cart">
                    <FiShoppingCart />
                    <sup>
                      <Badge
                      bg="secondary"
                        style={{
                          border: "none",
                          outline: "none",
                          // borderRadius: "1rem",
                          color: "#F6EFEE",
                          textAlign:'center',
                          display:'inline',
                          marginLeft:'5px'
                        }}
                      >
                        {cartLength}
                      </Badge>
                    </sup>
                  </Link>
                </LinkContainer>
                <LinkContainer to="/logout">
                  <Link
                    className="nav-link"
                    onClick={userLogoutHandler}
                    to="/logout"
                  >
                    Logout
                  </Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
