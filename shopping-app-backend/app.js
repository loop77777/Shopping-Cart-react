const express = require("express");
const app = express();
const mongoose = require("mongoose");
const seedDB = require("./seed");
const productRoutes = require("./route/productRoute");
const authRoutes = require("./route/authRoutes");
require("dotenv").config();
const cookieParser = require("cookie-parser");

mongoose
  .connect("mongodb://127.0.0.1:27017/shopping-cart", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("database connected!");
  })
  .catch((err) => {
    console.log(err);
  });
//seedDB();

//router

app.use(express.json());

app.use(cookieParser());

app.use(productRoutes);
app.use(authRoutes);

app.listen(3003, () => {
  console.log("server started at http://localhost:3003");
});
