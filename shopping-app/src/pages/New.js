import React, { Component } from 'react';
import {
  FloatingLabel,
  Form,
  Button,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { toast } from "react-toastify";


class NewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      imgUrl: '',
      price: '',
      desc: '',
    };
  }

  changeHandler = e => {
    //  console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };
  formSubmitHandler = async e => {
    e.preventDefault();
    //console.log(this.state);
    await axios.post('/products', this.state);
    console.log('product created');
    this.props.history.push('/allproducts');
    toast.success("Created The Product Successfully", {
      theme: "dark",  
    });
  };

  render() {
    return (
      <div style={{ width: '100%', position: 'relative', marginTop:'7rem'}}>
        <br />
        <h1>Register New Product</h1>
        <br />
        <Form onSubmit={this.formSubmitHandler}>
          <FloatingLabel label="Product name" className="mb-3">
            <Form.Control
              type="text"
              name="name"
              placeholder=" Any Product name"
              onChange={this.changeHandler}
            />
          </FloatingLabel>
          <FloatingLabel label="Price(inr)" className="mb-3">
            <Form.Control
              type="text"
              name="price"
              placeholder="any price in ₹"
              onChange={this.changeHandler}
            />
          </FloatingLabel>
          <FloatingLabel label="Url address" className="mb-3">
            <Form.Control
              type="text"
              name="imgUrl"
              placeholder="example.com"
              onChange={this.changeHandler}
            />
          </FloatingLabel>
          <InputGroup>
            <InputGroup.Text>Your description</InputGroup.Text>
            <FormControl
              as="textarea"
              name="desc"
              aria-label="Description about your product"
              style={{ height: '120px' }}
              onChange={this.changeHandler}
            />
          </InputGroup>
          <Button
            style={{
              backgroundColor: '#616e7c',
              border: 'none',
              margin: '1.5rem',
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
export default withRouter(NewProduct);
