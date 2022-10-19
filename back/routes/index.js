const express = require("express");
const router = express.Router();
const usersRoutes = require("./users");
const carsRoutes = require("./cars");

router.use("/users", usersRoutes);
router.use("/cars", carsRoutes);

module.exports = router;
