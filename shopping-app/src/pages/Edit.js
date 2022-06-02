import React, { Component } from "react";
import {
  FloatingLabel,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imgUrl: "",
      price: "",
      desc: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formSubmitHandler = async (e) => {
    e.preventDefault();
    axios.patch(`/products/${this.props.match.params.id}`, this.state);
    this.props.history.push(`/products/${this.props.match.params.id}`);
    toast.success("Edited the product", {
      theme: "dark",  
    });
  };

  async componentDidMount() {
    let product = await axios.get(
      `/products/${this.props.match.params.id}/edit`
    );
    // console.log(product)
    product = product.data;
    this.setState({
      name: product.name,
      imgUrl: product.imgUrl,
      price: product.price,
      desc: product.desc,
    });
  }

  render() {
    return (
      <div style={{ width: "100%", position: "relative", marginTop: "8rem" }}>
        <br />
        <h2>Edit This Product</h2>
        <br />
        <Form onSubmit={this.formSubmitHandler}>
          <FloatingLabel label="Product name" className="mb-3">
            <Form.Control
              type="text"
              name="name"
              placeholder=" Any Product name"
              onChange={this.changeHandler}
              value={this.state.name}
            />
          </FloatingLabel>
          <FloatingLabel label="Price(inr)" className="mb-3">
            <Form.Control
              type="text"
              name="price"
              placeholder="any price in ₹"
              onChange={this.changeHandler}
              value={this.state.price}
            />
          </FloatingLabel>
          <FloatingLabel label="Url address" className="mb-3">
            <Form.Control
              type="text"
              name="imgUrl"
              placeholder="example.com"
              onChange={this.changeHandler}
              value={this.state.imgUrl}
            />
          </FloatingLabel>
          <InputGroup>
            <InputGroup.Text>Your description</InputGroup.Text>
            <FormControl
              as="textarea"
              name="desc"
              aria-label="Description about your product"
              style={{ height: "120px" }}
              onChange={this.changeHandler}
              value={this.state.desc}
            />
          </InputGroup>
          <Button
            style={{
              backgroundColor: "#616e7c",
              border: "none",
              margin: "1.5rem",
            }}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default withRouter(Edit);
