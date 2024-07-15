const express = require("express");
const app = express();

app.get("/", (req, res) => {
  //res.send("./views/about.html");
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

//always use this in the end because express stops when a response is sent and does not continue with the remaining code
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});

app.listen(3000, (err) => {
  if (err) {
    return "could not connect";
  }
});
