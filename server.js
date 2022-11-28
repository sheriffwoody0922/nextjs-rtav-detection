const express = require("express");
const mongoose = require("mongoose");
const next = require("next");
const fileUpload = require("express-fileupload");


const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
console.log(process.env.NODE_ENV);
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  // server.use(fileUpload())

  server.all("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Ready on http://localhost:${port}`);
  });
  mongoose
    .connect("mongodb://127.0.0.1:27017/mujiba", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("DB Connected: " + "mongodb://localhost/mujiba");
    })
    .catch((err) => {
      console.log("Unable to Connect to DB" + err);
    });
});
