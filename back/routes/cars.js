const express = require("express");
const router = express.Router();
const { Car, User } = require("../db/models");

router.get("/", (req, res, next) => {
  Car.findAll().then((cars) => res.send(cars));
});

router.get("/:id", (req, res, next) => {
  Car.findByPk(req.params.id, { include: { model: User, as: "owner" } }).then(
    (car) => res.send(car)
  );
});

router.post("/", (req, res, next) => {
  Car.create(req.body).then((car) => res.status(201).send(car));
});

module.exports = router;
