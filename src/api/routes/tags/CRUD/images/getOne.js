const prismaClient = require("../../../../../prismaClient");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { uploader } = req.query;

    const images = await prismaClient.image.findMany({
      where: {
        tags: {
          some: {
            id,
          },
        },
      },
      include: {
        uploader: uploader
          ? {
              select: {
                id: true,
                username: true,
                avatarURL: true,
              },
            }
          : false,
      },
    });

    res.status(200).json(images);
  } catch (error) {
    next(error);
  }
};
