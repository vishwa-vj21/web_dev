import express from "express";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";
app.use(bodyParser.urlencoded({ extended: true }));  //parsing the incoming request body otherwise req.body will be undefined

app.use(morgan("combined"));

function bandnamegen(req, res, next) {
  bandName = req.body["street"] + req.body["pet"];
  console.log(bandName);
  next();
}

app.use(bandnamegen);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
}
);

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2> ${bandName}✌️</h2>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
