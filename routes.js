const express = require("express");

const router = express.Router();

const UserController = require("./controller/user-controller");

router.get("/users", UserController.index);

module.exports = router;
