const express = require("express");
const app = express();
function logger(req, res, next) {
  const date = new Date();
  if (
    date.getDay() === 0 ||
    date.getDay() === 6 ||
    date.getHours() < 9 ||
    date.getHours() > 17
  ) {
    res.sendFile(__dirname + "/public/closed.html");
  } else next();
}
app.use(logger);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/css/style.css", (req, res) => {
  res.sendFile(__dirname + "/public/css/style.css");
});
app.get("/service", (req, res) => {
  res.sendFile(__dirname + "/public/service.html");
});
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/contact.html");
});
// app.get("/closed", (req, res) => {
//   res.sendFile(__dirname + "/public/closed.html");
// });

const port = 5000;
app.listen(port, (err) =>
  err ? console.log(err) : console.log(`server started on port ${port}`)
);
