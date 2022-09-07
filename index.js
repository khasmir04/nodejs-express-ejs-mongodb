const express = require("express");
const dotEnv = require('dotenv');
const mongoose = require('mongoose');

dotEnv.config()

const app = express();
const PORT = 3050;

mongoose.connect(process.env.DB_CONNECT, () => {
  console.log("Connected to database.");
})

const galleryRouter = require("./routes/gallery.routes");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Home Page
app.get("/", (req, res) => {
  res.status(200).render("pages/index");
});

// About Page
app.get("/about", (req, res) => {
  res.render("pages/about");
});

// Gallery Page
app.use("/gallery", galleryRouter);

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
