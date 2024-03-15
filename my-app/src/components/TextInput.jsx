import React, { useState, useRef } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { PiExportBold } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import { useEffect } from "react";
import { MdOutlineColorLens } from "react-icons/md";
import { ChromePicker } from "react-color";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { IoIosStar } from "react-icons/io";
import { toPng } from "html-to-image";
import axios from "axios";

function TextInput() {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  const [backgroundColor, setBackgroundColor] = useState("#555");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("html");
  const [selectedTheme, setSelectedTheme] = useState("dark");
  const [favoriteThemes, setFavoriteThemes] = useState([]);
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);

  useEffect(() => {
    handleGetFavoriteThemes();
  }, []);

  const handleGetFavoriteThemes = () => {
    axios
      .post(
        "http://localhost:3001/api/favourites",
        {
          email: localStorage.getItem("email"),
        },
        {
          headers: { "auth-token": localStorage.getItem("token") },
        }
      )
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          console.log("error");
        } else {
          setFavoriteThemes(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const containerRef = useRef(null);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "200vh",
    minHeight: "58.8vh",
    backgroundColor: "#3a6bfa",
  };

  const subContainerStyle = {
    backgroundColor: "#e98bbd",
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
    color: "#ffffff",
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
    setText(event.target.value);
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
    toPng(containerRef.current)
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
    axios
      .post(
        "http://localhost:3001/api/favourites/add",
        {
          theme: selectedTheme,
          email: localStorage.getItem("email"),
        },
        {
          headers: { "auth-token": localStorage.getItem("token") },
        }
      )
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          console.log("error");
        } else {
          setFavoriteThemes((prev) => [...prev, selectedTheme]);
          handleGetFavoriteThemes();
          handleGetFavoriteThemes();
          handleGetFavoriteThemes();
          handleGetFavoriteThemes();
          handleGetFavoriteThemes();
        }
      });
  };

  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "b") {
      setIsBold(!isBold);

      event.preventDefault();
    }

    if (event.ctrlKey && event.key === "l") {
      setIsItalic(!isItalic);
      event.preventDefault();
    }
  };

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.ctrlKey && event.key === "s") {
        console.log("Guardando...");
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
              <option value="theme" hidden>
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
                {favoriteThemes ? (
                  <button style={buttonStyle} onClick={handleFavoriteThemes}>
                    {favoriteThemes?.includes(selectedTheme) ? (
                      <IoIosStar />
                    ) : (
                      <FaRegStar />
                    )}
                  </button>
                ) : null}
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
            onKeyDown={handleKeyDown}
            style={{
              ...themeStyles[selectedTheme],
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
              fontWeight: isBold ? "bold" : "normal",
              fontStyle: isItalic ? "italic" : "normal",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default TextInput;
