const prismaClient = require("../../../../prismaClient");

module.exports = async (req, res) => {
  const user = await prismaClient.user.findUnique({
    where: {
      id: req.params.id,
    },
  });

  if (!user) {
    res.status(404);

    throw new Error("User not found.");
  }

  return res.status(200).json(user);
};
