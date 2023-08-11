require("dotenv").config();
const express = require("express");
const eventRoutes = require("./routes/events.js");
const mongoose = require("mongoose");

// express app
const app = express();

// middleware

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  next();
});

// routes

app.use("/api/events", eventRoutes);

//MongoDb Connection

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB!");
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port", process.env.PORT + ".");
    });
  })
  .catch((error) => {
    console.log(error);
  });
