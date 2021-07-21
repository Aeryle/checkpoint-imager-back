const { Router } = require("express");
const Joi = require("joi");

const { string } = Joi.types();

const { bodyValidator } = require("../../../middlewares");

const getAll = require("./CRUD/getAll");
const getOne = require("./CRUD/getOne");
const post = require("./CRUD/post");
const put = require("./CRUD/put");
const _delete = require("./CRUD/delete");

const router = Router();

const defaultSchema = Joi.object({
  username: string.min(3),
  email: string.email(),
  // Password rules: at least 8 characters, one uppercase letter,
  // one lowercase letter, one number and one special character
  password: string.min(3),
  avatarURL: string.uri(),
});

const postSchema = defaultSchema.keys({
  username: string.required(),
  email: string.required(),
  password: string.required(),
});

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", bodyValidator(postSchema), post);
router.put("/:id", bodyValidator(defaultSchema), put);
router.delete("/", _delete);

module.exports = router;
