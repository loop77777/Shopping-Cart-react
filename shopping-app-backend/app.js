const express = require("express");
const app = express();
const mongoose = require("mongoose");
const seedDB = require("./seed");
const productRoutes = require("./route/productRoute");
const authRoutes = require("./route/authRoutes");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 3003;
const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/shopping-cart";
const clientUrl = (process.env.CLIENT_URL || "http://localhost:3000").replace(/\/$/, "");

mongoose
  .connect(mongoUri, {
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

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", clientUrl);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.use(express.json());

app.use(cookieParser());

app.use(productRoutes);
app.use(authRoutes);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
