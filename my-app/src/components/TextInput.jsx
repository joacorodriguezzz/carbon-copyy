import React, { useState, useRef } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { PiExportBold } from "react-icons/pi";
import { FiTwitter } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineColorLens } from "react-icons/md";
import { ChromePicker } from "react-color";
import CodeEditor from "@uiw/react-textarea-code-editor";
import Highlighter from "./common/CodeHighlighter";
// import htmlToImage from "html-to-image";

function App() {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  const [backgroundColor, setBackgroundColor] = useState("#555"); // Estado para el color de fondo del subcontenedor
  const [displayColorPicker, setDisplayColorPicker] = useState(false); // Estado para mostrar/ocultar el color picker
  const [inputValue, setInputValue] = useState(""); // Estado para el valor del input
  const [copied, setCopied] = useState(false); // Estado para controlar si se ha copiado el contenido

  const containerRef = useRef(null); // Referencia al contenedor principal

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#212529",
  };

  const subContainerStyle = {
    backgroundColor: "#333", // Usando el color de fondo del estado
    width: "800px",
    padding: "20px",
    borderRadius: "10px",
  };

  const formularioStyle = {
    maxWidth: "200%",
    width: "auto",
    padding: "20px",
    backgroundColor: backgroundColor,
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    color: "#fff",
  };

  const inputStyle = {
    width: "100%",
    height: "300px",
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
    flexWrap: "wrap",
    marginBottom: "10px",
  };

  const selectStyle = {
    marginRight: "10px",
    marginBottom: "10px",
    padding: "5px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#444",
    color: "#fff",
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

  const handleColorChange = (color) => {
    setBackgroundColor(color.hex); // Actualizar el color de fondo del subcontenedor
  };

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker); // Mostrar u ocultar el color picker
  };

  const handleClose = () => {
    setDisplayColorPicker(false); // Ocultar el color picker cuando se cierra
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Actualizar el valor del input
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(inputValue); // Copiar el valor del input al portapapeles
    setCopied(true); // Establecer el estado de copiado a verdadero
    setTimeout(() => {
      setCopied(false); // Restablecer el estado de copiado después de 2 segundos
    }, 2000);
  };

  // const handleExportClick = () => {
  //   htmlToImage
  //     .toPng(containerRef.current)
  //     .then(function (dataUrl) {
  //       var link = document.createElement("a");
  //       link.download = "snippet.png";
  //       link.href = dataUrl;
  //       link.click();
  //     })
  //     .catch(function (error) {
  //       console.error("Error exporting snippet:", error);
  //     });
  // };

  return (
    <div style={containerStyle}>
      <div style={subContainerStyle} ref={containerRef}>
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
              <button
                style={buttonStyle}
                onClick={handleCopyClick}
                className={copied ? "copied" : ""}
              >
                <MdOutlineContentCopy />
              </button>
              <button style={buttonStyle}>
                <PiExportBold />
              </button>
              <div style={{ position: "relative" }}>
                <button style={buttonStyle} onClick={handleClick}>
                  <MdOutlineColorLens />
                </button>
                {displayColorPicker && (
                  <div style={{ position: "absolute", zIndex: "2" }}>
                    <div
                      style={{
                        position: "fixed",
                        top: "0px",
                        right: "0px",
                        bottom: "0px",
                        left: "0px",
                      }}
                      onClick={handleClose}
                    />
                    <ChromePicker
                      color={backgroundColor}
                      onChange={handleColorChange}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <CodeEditor
            value={code}
            language="html"
            placeholder="Please enter JS code."
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            style={{
              backgroundColor: "#f5f5f5",
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
// onClick={handleExportClick}
