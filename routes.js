const express = require("express");

const router = express.Router();

const {listaPacientes} = require("./controller/paciente-controller");

router.get("/pacientes", listaPacientes);

module.exports = router;
