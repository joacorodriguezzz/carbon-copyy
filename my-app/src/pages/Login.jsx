import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import { MDBContainer, MDBInput, MDBBtn } from "mdb-react-ui-kit";
function Login() {
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50 bg-light">
      <MDBInput
        wrapperClass="mb-4"
        label="Email address"
        id="form1"
        type="email"
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Password"
        id="form2"
        type="password"
      />

      <div className="d-flex justify-content-between mx-3 mb-4"></div>

      <MDBBtn className="mb-4">Sign in</MDBBtn>

      <div className="text-center">
        <p>
          Not a member? <a href="/register">Register</a>
        </p>
      </div>
    </MDBContainer>
  );
}

export default Login;
