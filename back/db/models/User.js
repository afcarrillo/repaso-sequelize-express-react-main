const db = require("..");
const S = require("sequelize");

class User extends S.Model {}

User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    lastname: {
      type: S.STRING,
      allowNull: false,
    },
    dni: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "user" }
);

module.exports = User;
