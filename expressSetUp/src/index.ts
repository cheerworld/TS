import express from "express";

const app = express();
const port = 3000;

app.get("/api", (req, res) => {
  res.send("what's up Cheer!");
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
