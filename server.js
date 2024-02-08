require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./connectDB");
const app = express();

const PORT = process.env.PORT || 3000;

// connects the database
connectDB();

// this allows cross origin resource sharing between client and server, which is most times on different port
app.use(cors());
// this is needed to pass data as json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// default route
app.get("/api", (req, res) => {
  res.json("Welcome to our CMS server!");
});

// 404 route (for routes that don't exist)
app.get("*", (req, res) => {
  res.sendStatus("404");
});

// comand-line check
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
