const prismaClient = require("../../../../prismaClient");
const { hash } = require("../../../../utils/passwordManager");
const { getLanguage } = require("../../../../utils/i18n");
const errors = require("../../../../i18n");

module.exports = async (req, res, next) => {
  try {
    const data = req.body;

    const user = await prismaClient.user.create({
      data: {
        ...data,
        password: hash(data),
      },
    });

    delete user.password;

    return res.status(204).json(user);
  } catch (error) {
    const {
      code,
      meta: { target },
    } = error;

    error.message = errors.prisma[code][getLanguage(req)](target);

    return next(error);
  }
};
