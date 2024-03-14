import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    axios
      .post("http://localhost:3001/api/user/register", {
        name: name,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          console.log("error");
        } else {
          alert("Usuario registrado correctamente");
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(
          "Hubo un error al procesar la solicitud. Por favor, inténtalo de nuevo más tarde."
        );
      });
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50 bg-light">
      <MDBInput
        wrapperClass="mb-4"
        placeholder="Name"
        id="name"
        onChange={handleNameChange}
      />
      <MDBInput
        wrapperClass="mb-4"
        placeholder="Lastname"
        id="lastName"
        onChange={handleLastNameChange}
      />
      <MDBInput
        wrapperClass="mb-4"
        
        placeholder="Email address"
        id="email"
        type="email"
        onChange={handleEmailChange}
      />
      <MDBInput
        wrapperClass="mb-4"
        placeholder="Password"
        id="password"
        type="password"
        onChange={handlePasswordChange}
      />
      <div className="d-flex justify-content-between mx-3 mb-4"></div>
      <MDBBtn onClick={handleRegister} className="mb-4 bg-success">
        Register
      </MDBBtn>
      <div className="text-center">
        <p>
          Already a member? <a href="/login">Login</a>
        </p>
      </div>
    </MDBContainer>
  );
}

export default Register;
