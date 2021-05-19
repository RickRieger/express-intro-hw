//Step 1a initialize express by bringing in require express
const express = require("express");
//Step 2a bring in Morgan
const logger = require("morgan");
//Step 4 bringing in path by default - node gives it to us
const path = require("path");
//Step 1b initialize express app
const app = express();
//Step 2b use logger dev = development (middleware)
app.use(logger("dev"));
//Step 3 using express json
app.use(express.json());
//Step 4a tell where to find the views folder
app.set("views", path.join(__dirname, "views"));
//Step 4b set view engine to use EJS
app.set("view engine", "ejs");
//Step 5 telling the app where to serve up static files
app.use(express.static(path.join(__dirname, "public")));



const aboutMeArray = ["Fast cars and motorcycles intrigue me.", "Saxophone has been my main ax over the years.", "I collect expensive shades."]

// app.use("/api/team", teamRouter);
app.get("/", function (req, res) {
  res.render("index", {user:"Rick Rieger", aboutMeArray});
});

app.get("/photo-fun", function (req, res) {
  res.render("photos");
});

app.get("/:pet/:age", function (req, res) {
  res.render("pets",{
    pet: req.params.pet,
    age: req.params.age,
  }
);
});

//Step 1c start express server
app.listen(3000, function () {
  console.log(`Server is running on PORT: ${3000}`);
});