const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const authRoutes = require("./routes/auth");
require("dotenv").config();

const app = express();

// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Conexión a Base de datos

// import routes

// route middlewares
app.use("/api/user", authRoutes);
app.get("/", (req, res) => {
  res.json({
    estado: true,
    mensaje: "funciona!",
  });
});

// iniciar server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`servidor andando en: ${PORT}`);
});
// mongodb+srv://joacorodriguez:<password>@carbocopy.84gdjiu.mongodb.net/?retryWrites=true&w=majority
