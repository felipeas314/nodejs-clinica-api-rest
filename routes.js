const express = require("express");

const router = express.Router();

const { listaPacientes, adicionaPaciente } = require("./controller/paciente-controller");

router.get("/pacientes", listaPacientes);
router.post("/pacientes", adicionaPaciente);

module.exports = router;
