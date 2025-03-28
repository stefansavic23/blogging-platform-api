import "dotenv/config";

import Post from "../models/post.js";

import Sequelize from "sequelize";

const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => console.log("Error syncing database: ", err));

export default sequelize;
