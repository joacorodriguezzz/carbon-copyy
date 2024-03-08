import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { PiExportBold } from "react-icons/pi";
import { FiTwitter } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineColorLens } from "react-icons/md";

function App() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "73vh",
    backgroundColor: "#212529",
  };

  const formularioStyle = {
    width: "907.36px",
    height: "479px",
    padding: "20px",
    backgroundColor: "#333",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    color: "#fff",
  };

  const inputStyle = {
    width: "587px",
    height: "360px",
    marginBottom: "10px",
    padding: "5px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#444",
    color: "#fff",
    verticalAlign: "top",
    textAlign: "left",
  };

  const navBarStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  };

  const selectStyle = {
    marginRight: "10px",
    padding: "5px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#444",
    color: "#fff",
    width: "100px",
  };

  const buttonStyle = {
    height: "40px",
    marginRight: "10px",
    padding: "5px 15px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#666",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };
  buttonStyle[":hover"] = {
    backgroundColor: "#888",
  };

  return (
    <div style={containerStyle}>
      <div style={formularioStyle}>
        <div style={navBarStyle}>
          <select style={selectStyle}>
            <option value="" hidden>
              Theme
            </option>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>
          <select style={selectStyle}>
            <option value="" hidden>
              Language
            </option>
            <option value="opcion1">JS</option>
            <option value="opcion3">JSON</option>
            <option value="opcion2">JSX</option>
            <option value="opcion3">HTML</option>
          </select>
          <div style={navBarStyle}>
            <button style={buttonStyle} disabled>
              <IoSettingsOutline />
            </button>
            <button style={buttonStyle} disabled>
              <MdOutlineContentCopy />
            </button>
            <button style={buttonStyle} disabled>
              <FiTwitter />
            </button>
            <button style={buttonStyle}>
              <PiExportBold />
            </button>
          </div>
        </div>
        <input
          type="text"
          placeholder="Type your code here"
          style={inputStyle}
        />
      </div>
    </div>
  );
}

export default App;
