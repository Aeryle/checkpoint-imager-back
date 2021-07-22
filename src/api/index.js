const express = require("express");

const emojis = require("./emojis");
const users = require("./routes/users");
const images = require("./routes/images");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/emojis", emojis);
router.use("/users", users);
router.use("/images", images);

module.exports = router;
