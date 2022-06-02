import React, { useContext } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../App.css";
import UserContext from "../store/user-context";
import { toast } from "react-toastify";

function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordVerify, setPasswordVerify] = useState();

  const history = useHistory();
  const currentUser = useContext(UserContext);

  const { getLoggedIn } = currentUser;

  const inform = () => {
    return toast.warn("Please enter atleast 4 digits!", {
      theme: "dark",
      autoClose: false,
    });
  };

  async function submitHandler(e) {
    e.preventDefault();
    const newUserData = {
      email,
      password,
      passwordVerify,
    };
    // eslint-disable-next-line
    const res = await axios.post("/register", newUserData);
    // console.log(res);
    getLoggedIn();
    console.log("Registered successfully");
    toast.success("Registered successfully", {
      theme: "dark",
    });
    history.push("/allproducts");
  }

  return (
    <div>
      <form
        method="POST"
        onSubmit={submitHandler}
        style={{ marginTop: "15rem" }}
      >
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            onClick={inform}
          />
        </FloatingLabel>
        <br />
        <FloatingLabel label="Confirm Password">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setPasswordVerify(e.target.value)}
          />
        </FloatingLabel>
        <br />
        <Button
          type="submit"
          style={{
            backgroundColor: "#394053",
            border: "none",
            outline: "none",
            borderRadius: "2rem",
            color: "#F6EFEE",
            fontWeight: "500",
            textAlign: "center",
          }}
          className="links"
        >
          Register
        </Button>
      </form>
    </div>
  );
}

export default Signup;
