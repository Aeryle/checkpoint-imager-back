const prismaClient = require("../../../../prismaClient");

module.exports = async (req, res) => {
  const tags = await prismaClient.tag.findMany();

  return res.status(200).json(tags);
};
