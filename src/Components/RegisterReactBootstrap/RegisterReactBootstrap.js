import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import app from "../../firebase/firebase.init";

const auth = getAuth(app);

const RegisterReactBootstrap = () => {
  const [passwordError, setPasswordError] = useState("");
  const [success, setSucces] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    setSucces(false);
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setPasswordError("Please provide at least two uppercase");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Please provide at least six character");
      return;
    }
    if (!/(?=.*[!@#$%&*])/.test(password)) {
      setPasswordError("Please add at least one special character.");
      return;
    }
    setPasswordError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSucces(true);
        form.reset();
        verifyEmail();
        updateUserName(name);
      })
      .catch((error) => {
        console.error(error);
        setPasswordError(error.message);
      });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      alert("Please Check Your Email.");
    });
  };
  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
    console.log(email);
  };

  const updateUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log("Display Name Updated");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="w-50 mx-auto">
      <h3 className="text-primary">Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            name="name"
            type="text"
            placeholder="Enter Your Name"
          />
          <Form.Text className="text-muted">
            We'll never share your Data with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <p className="text-danger">{passwordError}</p>
        {success && <p className="text-success">User Created Successfully</p>}
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p>
        <small>
          Already have an Account? Please <Link to="/login">Login</Link>
        </small>
      </p>
    </div>
  );
};

export default RegisterReactBootstrap;
