const prismaClient = require("../../../../prismaClient");

const quantity = 25;

module.exports = async (req, res) => {
  const { page = 0, favoritedBy, tags } = req.query;

  console.log(tags && "Backup");

  const images = await prismaClient.image.findMany({
    skip: Number(page) * quantity,
    take: quantity,
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

  return res.status(200).json(images);
};
