const express = require("express");
const app = express();

app.set("view engine", "ejs");
//app.set("views", "myviews"); used to change the directory where it searches our ejs files

app.get("/", (req, res) => {
  //res.sendFile("./views/index.html", { root: __dirname });
  res.render("index", { title: "Home" });
});
app.get("/about", (req, res) => {
  //res.sendFile("./views/about.html", { root: __dirname });
  res.render("about",{title:"About"});
});

app.get("/blogs/create", (req, res) => {
  res.render("create",{title:"Create a Blog"});
});

//always use this in the end because express stops when a response is sent and does not continue with the remaining code
app.use((req, res) => {
  //res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404",{title:"404"});
});

app.listen(3000, (err) => {
  if (err) {
    return "could not connect";
  }
});
