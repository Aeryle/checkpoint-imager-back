const errors = {
  "any.required": (fields) => ({
    "fr-FR": `Champs manquants: ${fields.join(", ")}`,
    "en-US": `Missing fields: ${fields.join(", ")}`,
  }),
};

module.exports = errors;
