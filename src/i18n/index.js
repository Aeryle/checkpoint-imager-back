const users = require("./users");
const images = require("./images");
const validation = require("./validation");
const prisma = require("./prisma");

const errors = {
  users,
  images,
  validation,
  prisma,
};

module.exports = errors;
