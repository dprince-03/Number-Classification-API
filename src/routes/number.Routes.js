const express = require("express");
const { classifyNumber } = require("../controllers/number.Controller");

const router = express.Router();

router.get("/classify-number", classifyNumber);

module.exports = router;
