require("dotenv").config();
const express = require("express");
const eventRoutes = require("./routes/events.js");
const radioRoutes = require("./routes/radios.js");
const newsletterRoutes = require("./routes/newsletter.js");
const userRoutes = require("./routes/user.js");
const mongoose = require("mongoose");

// express app
const app = express();

let cors = require("cors");
// middleware

app.use(express.json());
app.use(cors());

// routes

app.use("/api/events", eventRoutes);
app.use("/api/radios", radioRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/user", userRoutes);

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
