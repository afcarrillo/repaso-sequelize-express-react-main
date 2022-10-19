const db = require("..");
const S = require("sequelize");

class Car extends S.Model {}

Car.init(
  {
    brand: {
      type: S.STRING,
      allowNull: false,
    },
    model: {
      type: S.STRING,
      allowNull: false,
    },
    year: {
      type: S.INTEGER,
      allowNull: false,
    },
    price: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "car" }
);

module.exports = Car;
