/**
 * @typedef {Express.Request} CustomRequest
 * @property {User} user
 */

/**
 * @typedef {User}
 * @property {'fr-FR'|'en-US'} language
 */

/**
 * @param {CustomRequest} req Express' request object
 * @returns {string} The locale
 */
const getLanguage = (req) => req.user?.language || "fr-FR";

module.exports = {
  getLanguage,
};
