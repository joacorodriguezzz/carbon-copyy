import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { SiGithub } from "react-icons/si";



export default function Footer() {
  return (
    <MDBFooter
      className="text-center text-white bg-primary"
      style={{ backgroundColor: "#f1f1f1" }}
    >
      <MDBContainer className="pt-4">
        <section className="mb-4">
          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="#!"
            role="button"
          ></MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="#!"
            role="button"
          ></MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="#!"
            role="button"
          ></MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab className="fa-instagram" />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab className="fa-linkedin" />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab className="fa-github" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center text-dark p-3 bg-primary"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <a className="text-dark ml-" href="https://www.linkedin.com/in/joaquinrodriguezareces/">
        <FaLinkedin />

        </a>

        <a className="text-dark" href="https://www.instagram.com/joacorodriguezz/">
        <BiLogoInstagramAlt />

        </a>
        <a className="text-dark" href="https://github.com/joacorodriguezzz">
        <SiGithub />


        </a>
      </div>
    </MDBFooter>
  );
}
