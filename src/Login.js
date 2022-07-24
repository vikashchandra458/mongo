import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
import NavBar from "./NavBar";
import "./Signup.css";

export default function Login(props) {
  let history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const submitData = (e) => {
    Axios.post("http://localhost:9000/login", {
      email: email,
      password: password,
    }).then((res) => {
      if (res.data.confirm === "Successfully Logged In") {
        alert(
          `${res.data.confirm} ${res.data.dataExist[0].Fname} ${res.data.dataExist[0].Lname}`
        );
        history("/table", {
          state: {
            Fname: res.data.dataExist[0].Fname,
            Lname: res.data.dataExist[0].Lname,
          },
        });
      } else {
        alert(res.data);
      }
    });
    e.preventDefault();
  };

  useEffect(() => {
    myref.current.focus();
  }, []);
  const myref = useRef(null);
  const SignUp = () => {
    history("/");
  };

  return (
    <>
      <NavBar />
      <Form onSubmit={SignUp}>
        <button className="extra" type="submit">
          <p>New Registraion</p>
        </button>
      </Form>

      <div className="center">
        <h1>Login</h1>
        <Form onSubmit={submitData}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="txt_field1">Email address</Form.Label>
            <Form.Control
              type="email"
              ref={myref}
              placeholder={"Enter Email"}
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="txt_field1">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              value={agree}
              label="Accepts the terms and conditions."
              onChange={() => setAgree(!agree)}
              color={agree ? "#4630EB" : undefined}
            />
          </Form.Group>

          <Button
            className="button1"
            type="submit"
            style={{ backgroundColor: agree ? "#4630EB" : "grey" }}
            disabled={!agree}
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
