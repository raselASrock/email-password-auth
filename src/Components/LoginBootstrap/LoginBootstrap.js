import { Toast } from "bootstrap";
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import app from "../../firebase/firebase.init";

const auth = getAuth(app)

const LoginBootstrap = () => {
  const [success, setSuccess] = useState(false)
  const [userEmail, setUserEmail] = useState('')
    const handleSubmit = event =>{
        event.preventDefault()
        setSuccess(false)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth,email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setSuccess(true)
        })
        .catch(error =>{
            console.error(error);
        })
    }

    const handleEmailBlur = event =>{
      const email = event.target.value;
      setUserEmail(email);
      console.log(email);
    }


    const handleForgetPassword = () =>{
      if(!userEmail){
        alert('Please Enter your email')
      }
      sendPasswordResetEmail(auth, userEmail)
      .then(() =>{
        alert('Reset Password Sent') 
      })
      .catch( error =>{
        console.error(error);
      })
    }


  return (
    <div className="w-50 mx-auto">
      <h3 className="text-primary">Please Log In</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control onBlur={handleEmailBlur} name="name" type="text" placeholder="Enter Your Name" />
          <Form.Text className="text-muted">
            We'll never share your Data with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmailBlur} name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      { success && <p className="text-success">Successfully login to the account</p>}
      <p><small>New to this Website? Please <Link to='/register'>Register</Link></small></p>
      <p>Forget Password? <button className="btn btn-link" onClick={handleForgetPassword} type="button">Please Reseat</button></p>
    </div>
  );
};

export default LoginBootstrap;
