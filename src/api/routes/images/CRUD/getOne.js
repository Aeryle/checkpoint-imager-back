const prismaClient = require("../../../../prismaClient");
const errors = require("../../../../i18n");
const { getLanguage } = require("../../../../utils/i18n");

module.exports = async (req, res, next) => {
  try {
    const { favoritedBy, tags } = req.query;

    const image = await prismaClient.image.findUnique({
      where: {
        id: req.params.id,
      },
      include: {
        favoritedBy: Boolean(favoritedBy),
        tags: tags
          ? {
              select: {
                id: true,
                name: true,
              },
            }
          : false,
      },
    });

    if (!image) {
      res.status(404);
      return next(errors.images[404][getLanguage(req)]);
    }

    return res.status(200).json(image);
  } catch (error) {
    next(error);
  }
};
