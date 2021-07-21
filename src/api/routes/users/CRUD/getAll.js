const prismaClient = require("../../../../prismaClient");

module.exports = async (_, res) => {
  const users = await prismaClient.user.findMany();

  return res.status(200).json(users);
};
