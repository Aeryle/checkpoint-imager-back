const prismaClient = require("../../../../prismaClient");
const { hash } = require("../../../../utils/passwordManager");

module.exports = async (req, res) => {
  const { id } = req.params;

  const data = req.body;

  const user = await prismaClient.user.update({
    where: {
      id,
    },
    data: {
      ...data,
      password: hash(data),
    },
  });

  delete user.password;

  return res.status(201).json(user);
};
