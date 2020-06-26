const { Router } = require('express');

const routes = new Router();

const { listaPacientes, adicionaPaciente } = require("./app/controller/paciente-controller");
const { adicionaMedico, listaMedicos } = require('./app/controller/medico-controller');
const { marcarConsulta, listaTodasAsConsultas } = require('./app/controller/consulta-controller');
const { criaUsuario, listaUsuarios } = require('./app/controller/usuario-controller');

routes.get("/pacientes", listaPacientes);
routes.get("/medicos", listaMedicos);
routes.get('/usuarios',listaUsuarios);

//Precisa logar no sistema
routes.post("/pacientes", adicionaPaciente);
routes.post("/medicos", adicionaMedico);
routes.post("/consultas", marcarConsulta);
routes.post('/usuarios', criaUsuario);

routes.get('/consultas/listaTodas', listaTodasAsConsultas);


module.exports = routes;
