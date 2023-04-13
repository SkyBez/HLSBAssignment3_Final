const express = require("express");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");
const app = express();

//sets our view engine to load files ending in .ejs
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(expressSession({
  resave: false,
  saveUninitialized: true,
  secret: "very secret key"
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const PORT = 4000;

app.listen(PORT, () => {
  console.log("App listening on port ", PORT);
});

app.get("/", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "index.html"));
  let current = req.session.current;
  res.render("index", {current});
});

app.get("/profile", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "profile.html"));
  let user = req.session.user;
  res.render("profile", {user});
});

app.get("/math", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "math.html"));
  res.render("math");
});

app.get("/privacy", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "privacy"));
  res.render("privacy");
});

app.get("/terms", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "terms"));
  res.render("terms");
});

app.get("/slides", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "slideshow"));
  res.render("slideshow");
});

app.get("/calculator", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "slideshow"));
  res.render("calculator");
});



app.post("/update-profile", (req,res)=>{
  console.log(req.body);

  req.session.user = req.body;

  res.redirect("/profile");
})

app.post("/update-dashboard", (req,res)=>{
  console.log(req.body);

  req.session.current = req.body;

  res.redirect("/");
})

