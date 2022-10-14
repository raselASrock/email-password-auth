import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const LoginBootstrap = () => {
    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email;
        const password = form.password;
    }
  return (
    <div className="w-50 mx-auto">
      <h3 className="text-primary">Please Log In</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p><small>New to this Website? Please <Link to='/register'>Register</Link></small></p>
    </div>
  );
};

export default LoginBootstrap;
