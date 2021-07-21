const prismaClient = require("../../../../prismaClient");

module.exports = async (_, res, next) => {
  const users = await prismaClient.user.findMany();

  return res.status(200).json(users);
};
