const express = require("express");
const router = express.Router();
const Question = require('../models/Question');

// Retrive ALL
router.get("/", (req, res, next) => {
  Question.find()
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

module.exports = router;