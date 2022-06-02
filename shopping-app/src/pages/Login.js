import React, { useState, useContext } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import "../App.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../store/user-context";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const currentUser = useContext(UserContext);

  const { getLoggedIn } = currentUser;

  async function LoginFormHandler(e) {
    e.preventDefault();
    const loginUserData = {
      email,
      password,
    };
    // eslint-disable-next-line
    const res = await axios.post("/login", loginUserData);
    // console.log(res);
    console.log("logged in succcessfully.");
    toast.success("logged in succcessfully", {
      theme: "dark",
    });
    getLoggedIn();
    history.push("/allproducts");
  }

  return (
    <div>
      <form
        method="GET"
        style={{ marginTop: "15rem" }}
        onSubmit={LoginFormHandler}
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
          login
        </Button>
      </form>
    </div>
  );
}
