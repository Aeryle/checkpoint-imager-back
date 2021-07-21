const bcrypt = require("bcrypt");

const hash = (password) => bcrypt.hash(password, process.env.BCRYPT_HASH);
const verifyHash = (clearPassword, storedHash) =>
  bcrypt.compare(clearPassword, storedHash);

module.exports = {
  hash,
  verifyHash,
};
