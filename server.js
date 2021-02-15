const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//const PORT = 3059;
PORT = process.env.PORT || 80; 

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect("mongodb+srv://root:abcde1234@cluster0.ml5kg.mongodb.net/workout?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});