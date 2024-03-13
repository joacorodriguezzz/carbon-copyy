import React, { useState, useRef } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { PiExportBold } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineColorLens } from "react-icons/md";
import { ChromePicker } from "react-color";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { toPng } from "html-to-image"; // Importar toPng específicamente
import { Controlled as CodeMirror } from "react-codemirror2";

function App() {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  const [backgroundColor, setBackgroundColor] = useState("#555");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("html");
  const [selectedTheme, setSelectedTheme] = useState("dark");
  const [favoriteThemes, setFavoriteThemes] = useState("");

  const containerRef = useRef(null);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#212529",
  };

  const subContainerStyle = {
    backgroundColor: "#333",
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
    transition: "box-shadow 0.3s",
  };

  const themeStyles = {
    dark: {
      backgroundColor: "#1E1E1E",
      color: "#FFFFFF",
    },
    light: {
      backgroundColor: "#FFFFFF",
      color: "#000000",
    },
    duotoneDark: {
      backgroundColor: "#2A2734",
      color: "#ABB2BF",
    },
    duotoneLight: {
      backgroundColor: "#F0F4F8",
      color: "#2D3748",
    },
  };

  const handleColorChange = (color) => {
    setBackgroundColor(color.hex);
  };

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleInputChange = (event) => {
    setCode(event.target.value);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };

  const handleExportClick = () => {
    toPng(containerRef.current) // Utilizar el método toPng importado
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "code_image.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error("Error exporting code as image:", error);
      });
  };

  const handleFavoriteThemes = (event) => {
    setFavoriteThemes(event.target.value);
  };
  const makeBold = (editor) => {
    const selectedText = editor.getSelection();
    const newText = `**${selectedText}**`; // Markdown para negrita
    editor.replaceSelection(newText);
  };

  const options = {
    lineNumbers: true,
    mode: "markdown", // Modo markdown para resaltar correctamente el texto en negrita
    theme: "material",
    extraKeys: {
      "Ctrl-B": (editor) => {
        makeBold(editor); // Llamar a la función makeBold cuando se presiona Ctrl + B
      },
    },
  };

  return (
    <div style={containerStyle}>
      <div style={subContainerStyle} ref={containerRef}>
        <div style={formularioStyle}>
          <div style={navBarStyle}>
            <select style={selectStyle} onChange={handleLanguageChange}>
              <option value="" hidden>
                Language
              </option>
              <option value="js">JS</option>
              <option value="json">JSON</option>
              <option value="jsx">JSX</option>
              <option value="html">HTML</option>
            </select>
            <select style={selectStyle} onChange={handleThemeChange}>
              <option value="" hidden>
                Theme
              </option>
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="duotoneDark">Duotone Dark</option>
              <option value="duotoneLight">Duotone Light</option>
            </select>
            <div style={navBarStyle}>
              <button
                style={buttonStyle}
                onClick={handleCopyClick}
                className={copied ? "copied" : ""}
              >
                <MdOutlineContentCopy />
              </button>
              <button style={buttonStyle} onClick={handleExportClick}>
                <PiExportBold />
              </button>
              <div style={{ position: "relative" }}>
                <button style={buttonStyle} onClick={handleClick}>
                  <MdOutlineColorLens />
                </button>
                <button style={buttonStyle} onClick={handleFavoriteThemes}>
                  <FaRegStar />
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
            language={selectedLanguage}
            theme={selectedTheme}
            placeholder="Please enter code."
            onChange={handleInputChange}
            padding={15}
            options={options}
            style={{
              ...themeStyles[selectedTheme],
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
