import express from "express";
import { promises as fs } from "fs";
import csv from "csvtojson";

const app = express();
const port = 3000;

const inputFile = "./users.csv";
const outputFile = "users.json";

app.get("/convert", (req, res) => {
  res.send("converting in process!");
  csv()
    .fromFile(inputFile)
    .then((obj) => {
      console.log(obj);
      const newData = obj.map((item) => {
        const first = item.first_name;
        const last = item.last_name;
        let phone = item.phone;
        if (phone === "") {
          phone = "missing phone number";
        }

        return { first, last, phone };
      });
      fs.writeFile(outputFile, JSON.stringify(newData));
    });
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
