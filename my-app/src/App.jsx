import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import TextArea from "./components/TextInput";
import CarbonNav from "./components/NavBar";
import Register from "./pages/Register";
import Login from "./pages/Login";
function App() {
  return (
    <div className="app h-200 bg-dark">
      <CarbonNav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
