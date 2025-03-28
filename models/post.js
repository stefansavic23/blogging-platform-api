import Sequelize from "sequelize";
import sequelize from "../util/database.js";

const Post = sequelize.define("posts", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  category: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  tags: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

export default Post;
