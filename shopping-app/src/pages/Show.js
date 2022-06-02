import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";
import { Link, useParams, useHistory } from "react-router-dom";
import ProductReviews from "../Components/products/ProductReviews";
import "../App.css";
import "./Star.css";
import UserContext from "../store/user-context";
import { toast } from "react-toastify";

export default function Shownew() {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);

  const params = useParams();
  const history = useHistory();
  const currentUser = useContext(UserContext);

  async function getProduct() {
    let product = await axios.get(`/products/${params.id}`);
    product = product.data;
    setName(product.name);
    setImg(product.imgUrl);
    setPrice(product.price);
    setDesc(product.desc);
    setReviews(product.reviews);
  }

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line
  }, []);

  async function deleteProductHandler() {
    await axios.delete(`/products/${params.id}`);
    history.push("/allproducts");
    toast.info("Product Deleted", { theme: "dark" });
  }

  async function formSubmitHandler(event) {
    event.preventDefault();
    await axios.post(`/products/${params.id}/review`, {
      rating: rating,
      comment: comment,
    });
    let product = await axios.get(`/products/${params.id}`);
    product = product.data;
    setReviews(product.reviews);
    setRating(1);
    setComment("");
    toast.success("Review Added", { theme: "dark" });
  }

  const { addToCart } = currentUser;
  function addToCartHandler() {
    const product = {
      id: params.id,
      name: name,
      price: price,
      desc: desc,
      img: img,
      reviews: reviews,
    };
    addToCart(product);
    toast.success("Added To Cart Successfully", {
      theme: "dark",
    });
  }

  let displayReviews = <p>This product has no reviews yet</p>;

  if (reviews.length) {
    displayReviews = reviews.map((review) => {
      return (
        <ProductReviews
          rating={review.rating}
          comment={review.comment}
          key={review._id}
        />
      );
    });
  }

  const inform = ()=>{
    toast.info("Currently, We Do Not Serve Buying",{
      theme:"dark"
    })
  }

  return (
    <div>
      <Row>
        <Col lg={6} md={12}>
          <Card
            style={{
              display: "flex",
              justifyContent: "center",
              margin: ".5rem",
              padding: ".2rem",
              backgroundColor: "#e4e7eb",
            }}
          >
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{desc}</Card.Text>
              <Card.Title>
                <b>₹{price}</b>
              </Card.Title>
              <Button
                style={{
                  backgroundColor: "#616e7c",
                  border: "none",
                  borderRadius: "2rem",
                  fontWeight: "500",
                  textAlign: "center",
                }}
                onClick={inform}
              >
                <Link className="links" to={"/"}>
                  Buy Now
                </Link>
              </Button>
              <Button
                style={{
                  backgroundColor: "#6C7D89",
                  border: "none",
                  borderRadius: "2rem",
                  margin: "1rem",
                  fontWeight: "500",
                  textAlign: "center",
                }}
                onClick={addToCartHandler}
              >
                <span className="links">Add to cart</span>
              </Button>
              <Button
                style={{
                  backgroundColor: "#515E67",
                  border: "none",
                  borderRadius: "2rem",
                  margin: ".9rem",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                <Link className="links" to={`/products/${params.id}/edit`}>
                  Edit
                </Link>
              </Button>
              <Button
                style={{
                  backgroundColor: "#394053",
                  border: "none",
                  borderRadius: "2rem",
                  color: "#F6EFEE",
                  fontWeight: "500",
                  textAlign: "center",
                }}
                disabled
              >
                <Link className="links" onClick={deleteProductHandler} to={"/"}>
                  Delete
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12} ml={2} style={{ marginTop: "2rem" }}>
          <h1>Leave A Review</h1>
          <br />
          <Form onSubmit={formSubmitHandler}>
            <fieldset className="starability-basic">
              <legend>Rating</legend>
              <input
                type="radio"
                id="no-rate"
                className="input-no-rate"
                name="rating"
                value="0"
                onChange={(e) => setRating(e.target.value)}
                aria-label="No rating."
              />
              <input
                type="radio"
                id="first-rate1"
                name="rating"
                onChange={(e) => setRating(e.target.value)}
                value="1"
              />
              <label htmlFor="first-rate1" title="Terrible">
                1 star
              </label>
              <input
                type="radio"
                id="first-rate2"
                name="rating"
                onChange={(e) => setRating(e.target.value)}
                value="2"
              />
              <label htmlFor="first-rate2" title="Not good">
                2 stars
              </label>
              <input
                type="radio"
                id="first-rate3"
                name="rating"
                onChange={(e) => setRating(e.target.value)}
                value="3"
              />
              <label htmlFor="first-rate3" title="Average">
                3 stars
              </label>
              <input
                type="radio"
                id="first-rate4"
                name="rating"
                onChange={(e) => setRating(e.target.value)}
                value="4"
              />
              <label htmlFor="first-rate4" title="Very good">
                4 stars
              </label>
              <input
                type="radio"
                id="first-rate5"
                name="rating"
                onChange={(e) => setRating(e.target.value)}
                value="5"
              />
              <label htmlFor="first-rate5" title="Amazing">
                5 stars
              </label>
            </fieldset>
            <br />
            <InputGroup>
              <InputGroup.Text>Write a review</InputGroup.Text>
              <FormControl
                as="textarea"
                name="comment"
                value={comment}
                aria-label="write a review"
                style={{ height: "220px" }}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
            </InputGroup>
            <Button
              style={{
                backgroundColor: "#394053",
                color: "#F6EFEE",
                outline: "none",
                border: "none",
                margin: "1.5rem",
                fontWeight: "500",
              }}
              type="submit"
            >
              Post
            </Button>
          </Form>
          <br />
          <br />
          <div className="mb-4">{displayReviews}</div>
        </Col>
      </Row>
    </div>
  );
}
