const users = require("./users");
const validation = require("./validation");
const prisma = require("./prisma");

const errors = {
  users,
  validation,
  prisma,
};

module.exports = errors;
