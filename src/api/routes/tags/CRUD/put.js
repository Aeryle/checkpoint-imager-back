const prismaClient = require("../../../../prismaClient");
const { hash } = require("../../../../utils/passwordManager");

module.exports = async (req, res) => {
  const { id } = req.params;

  const data = req.body;

  const image = await prismaClient.useimager.update({
    where: {
      id,
    },
    data,
  });

  return res.status(201).json(image);
};
