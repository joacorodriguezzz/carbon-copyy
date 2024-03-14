import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import CodeEditor from "@uiw/react-textarea-code-editor";

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

// function FavoriteList() {
//   const [favorites, setFavorites] = useState([]);
//   const [selectedTheme, setSelectedTheme] = useState("");
//   const codeEditorRef = useRef(null);

//   useEffect(() => {
//     fetchFavorites();
//   }, []);

//   const fetchFavorites = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get("http://localhost:3001/api/favorites", {
//         headers: { "auth-token": token },
//       });
//       setFavorites(response.data.favorites);
//     } catch (error) {
//       console.error("Error fetching favorites:", error);
//     }
//   };

  const addFavorite = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:3001/api/favorites/add",
        { topic: selectedTheme },
        {
          headers: { "auth-token": token },
        }
      );
      fetchFavorites(); // Actualizar la lista de temas favoritos después de agregar uno nuevo
    } catch (error) {
      console.error("Error adding favorite:", error);
    }
  };

  const handleAddFavorite = () => {
    const currentTheme = codeEditorRef.current.getOption("theme");
    if (currentTheme) {
      setSelectedTheme(currentTheme);
      addFavorite();
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "20px" }}>
        <h2>Favorite Themes</h2>
        <ul>
          {favorites.map((favorite, index) => (
            <li key={index}>{favorite}</li>
          ))}
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CodeEditor
          ref={codeEditorRef}
          language="javascript"
          theme="dark"
          value="console.log('Hello, world!');"
        />
        <button onClick={handleAddFavorite}>Add Favorite</button>
      </div>
    </div>
  );


export default FavoriteList;
