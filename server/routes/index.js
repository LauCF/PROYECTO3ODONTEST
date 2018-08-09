const express = require('express');
const router  = express.Router();
const Diaguser = require('../models/Diaguser')
const { ensureLoggedIn } = require("connect-ensure-login");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/profile", ensureLoggedIn(), (req, res, next) => {
  Diaguser.find({ user: req.user._id })
    .populate("diagnosis")
    .sort({ updated_at: -1 })
    .then(diaguser => {
      res.json(diaguser);
    });
});

module.exports = router;
