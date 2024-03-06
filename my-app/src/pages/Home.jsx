import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TextInput from "../components/TextInput";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="HomeStyle">
      <div className="h-200px border border-dark bg-dark text-light">
        <h1 className="text-center">Carbon Copy</h1>
        <p className="fs-3 h-200 w-50 mx-auto text-center p-3 sticky-lg-top ">
          Create and share beautiful images of your source code. Start typing or
          drop a file into the text area to get started.
        </p>
        <TextInput />
      </div>
      <Footer />
    </div>
  );
}
