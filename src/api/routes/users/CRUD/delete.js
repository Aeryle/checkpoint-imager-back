const prismaClient = require("../../../../prismaClient");

module.exports = async (req, res) => {
  const { id } = req.params;

  await prismaClient.user.delete({
    where: {
      id,
    },
  });

  return res.sendStatus(204);
};
