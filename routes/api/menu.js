const express = require("express");
const router = express.Router();

// Load Models
const Menu = require("../../models/Menu");

// @route   GET api/menu/
// @desc    get all menu items
// @access  Public
router.get("/", (req, res) => {
  Menu.find()
    .sort({ order: 1 })
    .then(menu => res.json(menu))
    .catch(err => res.status(404).json({ msg: "Error loading menu" }));
});

module.exports = router;
