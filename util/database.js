import "dotenv/config";

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

export default sequelize;
