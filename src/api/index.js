const express = require("express");

const emojis = require("./emojis");
const users = require("./routes/users");
const images = require("./routes/images");
const tags = require("./routes/tags");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/emojis", emojis);
router.use("/users", users);
router.use("/images", images);
router.use("/tags", tags);

module.exports = router;
