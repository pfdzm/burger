const express = require("express");

const router = express.Router();

const burger = require("../models/burgerModel");

router.get("/", (req, res) => {
  burger.all(data => {
    const hbsObj = {
      burgers: data
    };
    res.render("home", hbsObj);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create(req.body.burger_name, data => {
    res.redirect("/");
  });
});

router.put("/api/burgers/:id", (req, res) => {
  burger.update(req.params.id, data => {
    if (data.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
