const { Router } = require("express");

const getAll = require("./CRUD/getAll");
const getOne = require("./CRUD/getOne");

const router = new Router();

router.use("/", getAll);
router.use("/", getOne);

module.exports = router;
