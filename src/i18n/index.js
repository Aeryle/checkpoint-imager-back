const users = require("./users");
const images = require("./images");
const tags = require("./tags");
const validation = require("./validation");
const prisma = require("./prisma");

const errors = {
  users,
  images,
  tags,
  validation,
  prisma,
};

module.exports = errors;
