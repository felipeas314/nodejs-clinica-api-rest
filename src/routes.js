const { Router } = require('express');

const routes = new Router();

const { listaPacientes, adicionaPaciente } = require("./app/controller/paciente-controller");
const { adicionaMedico, listaMedicos } = require('./app/controller/medico-controller');

routes.get("/pacientes", listaPacientes);
routes.get("/medicos", listaMedicos);

routes.post("/pacientes", adicionaPaciente);
routes.post("/medicos", adicionaMedico);

module.exports = routes;
