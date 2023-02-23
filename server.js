const express = require("express");
const mongoose = require("mongoose");
const app = express()
const router = require("./routes/peopleRoutes.js");
const mongoDB = "mongodb://localhost:27017/test";
mongoose.connect(mongoDB);
app.use(express.json());
app.use(router);
app.listen(3000, () => {
  console.log("Server is running...");
});


