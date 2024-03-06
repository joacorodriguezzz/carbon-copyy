import React from "react";

function App() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
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
    marginRight: "10px",
    padding: "5px 10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#666",
    color: "#fff",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <div style={formularioStyle}>
        <div style={navBarStyle}>
          <select style={selectStyle}>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>
          <select style={selectStyle}>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>
          <select style={selectStyle}>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>
          <select style={selectStyle}>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Ingrese su codigo aquí"
          style={inputStyle}
        />
        <div style={navBarStyle}>
          <button style={buttonStyle}>Botón 1</button>
          <button style={buttonStyle}>Botón 2</button>
          <button style={buttonStyle}>Botón 3</button>
        </div>
      </div>
    </div>
  );
}

export default App;
