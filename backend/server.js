const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const data = require("./data/data.js");
const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/chat", (req, res) => {
  res.send(data.chats);
});

app.get("/api/chat/:id", (req, res) => {
  console.log(req.params.id);
  const singlechat = data.chats.find((c) => c._id === req.params.id);
  res.send(singlechat);
});
