const { Router } = require('express');

const routes = new Router();

const { listaPacientes, adicionaPaciente } = require("./app/controller/paciente-controller");

routes.get("/pacientes", listaPacientes);
routes.post("/pacientes", adicionaPaciente);

module.exports = routes;
