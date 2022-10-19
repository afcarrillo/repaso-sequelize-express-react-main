const Car = require("./Car");
const User = require("./User");

Car.belongsTo(User, { as: "owner" });

module.exports = { User, Car };
