const prismaClient = require("../../../../prismaClient");
const errors = require("../../../../i18n");
const { getLanguage } = require("../../../../utils/i18n");

module.exports = async (req, res, next) => {
  try {
    const tag = await prismaClient.tag.findUnique({
      where: {
        id: req.params.id,
      },
    });

    if (!tag) {
      res.status(404);

      return next(new Error(errors.tags[404][getLanguage(req)]));
    }

    return res.status(200).json(tag);
  } catch (error) {
    next(error);
  }
};
