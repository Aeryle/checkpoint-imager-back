const { Router } = require("express");
const Joi = require("joi");

const { string, array } = Joi.types();

const { bodyValidator } = require("../../../middlewares");

const getAll = require("./CRUD/getAll");
const getOne = require("./CRUD/getOne");
const post = require("./CRUD/post");
const put = require("./CRUD/put");
const _delete = require("./CRUD/delete");

const images = require("./CRUD/images");

const router = Router();

const schema = Joi.object({
  name: string.min(3).required(),
});

router.get("/", getAll);
router.get("/:id", getOne);
router.get("/:id/images", images.getOne);
router.post("/", bodyValidator(schema), post);
router.put("/:id", bodyValidator(schema), put);
router.delete("/", _delete);

module.exports = router;
