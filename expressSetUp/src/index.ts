import express from "express";
import logger from "./utilities/logger";
//import routes from "./routes/index";

const app = express();
const port = 3000;

app.get("/human", logger, (req, res) => {
  res.send("Hello human");
});

app.get("/dog", logger, (req, res) => {
  res.send("Hello dog");
});

app.get("/cat", (req, res) => {
  res.send("Hello cat");
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
