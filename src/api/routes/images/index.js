const { Router } = require("express");
const Joi = require("joi");

const { string, array } = Joi.types();

const { bodyValidator } = require("../../../middlewares");

const getAll = require("./CRUD/getAll");
const getOne = require("./CRUD/getOne");
const post = require("./CRUD/post");
const put = require("./CRUD/put");
const _delete = require("./CRUD/delete");

const router = Router();

const defaultSchema = Joi.object({
  url: string.uri(),
  name: string,
  tags: array.items(string.uuid()),
  uploader: string.uuid(),
});

const postSchema = defaultSchema.keys({
  url: string.required(),
  name: string.required(),
  uploader: string.required(),
});

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", bodyValidator(postSchema), post);
router.put("/:id", bodyValidator(defaultSchema), put);
router.delete("/", _delete);

module.exports = router;
