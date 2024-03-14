import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { MDBContainer, MDBInput, MDBBtn } from "mdb-react-ui-kit";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    axios
      .post("http://localhost:3001/api/user/login", {
        email: email,
        password: password,
      })
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          const token = data.data;
          localStorage.setItem("token", token.data.token);
          localStorage.setItem("email", email);
          alert("Usuario logueado correctamente");
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50  bg-light">
      <MDBInput
        wrapperClass="mb-4"
  placeholder="Email address"
        id="form1"
        type="email"
        onChange={handleEmailChange}
      />
      <MDBInput
        wrapperClass="mb-4"
  placeholder="Password"
        id="form2"
        type="password"
        onChange={handlePasswordChange}
      />

      <div className="d-flex justify-content-between mx-3 mb-4"></div>

      <MDBBtn onClick={handleLogin} className="mb-4 bg-success">
        Sign in
      </MDBBtn>

      <div className="text-center">
        <p>
          Not a member? <a href="/register">Register</a>
        </p>
      </div>
    </MDBContainer>
  );
}

export default Login;
