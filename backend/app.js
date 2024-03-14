const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const cors = require("cors");

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(cookieParser);
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// app.use("/", express.static("uploads"));

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

// import routes
const user = require("../backend/controller/user");

app.use("/api/v2/user", user)

// it's for ErrorHandling

app.use(ErrorHandler);

module.exports = app;
