import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json("working");
});

app.listen(process.env.PORT);
