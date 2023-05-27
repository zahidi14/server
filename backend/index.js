const express = require("express");
const PORT = 5500;
const app = express();

app.use(express.json());

const jsonData = require("./data.json");

app.get("/api/data/", (req, res) => {
  res.json(jsonData);
});

app.listen(PORT, () => {
  console.log("yeeeyy " + PORT);
});
