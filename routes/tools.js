const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.render("tools/home");
});

router.get("/tool/:id", (req, res) => {
  res.render(`tools/tool/${req.params.id}`);
});

module.exports = router;