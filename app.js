import "dotenv/config";
import express from "express";
import postRoute from "./routes/postsRoutes.js";

const app = express();

app.use(express.json());

app.use("/posts", postRoute);

app.get("/", (req, res) => {
  res.json("Welcome");
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
