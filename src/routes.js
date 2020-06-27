const { Router } = require('express');

const routes = new Router();

const { listaPacientes, adicionaPaciente } = require("./app/controller/paciente-controller");
const { adicionaMedico, listaMedicos, removeDoctor, findDoctorById, updateDoctor } = require('./app/controller/medico-controller');
const { marcarConsulta, listaTodasAsConsultas } = require('./app/controller/consulta-controller');
const { criaUsuario, listaUsuarios } = require('./app/controller/usuario-controller');

routes.get("/doctors", listaMedicos);

//Precisa logar no sistema
routes.get("/pacientes", listaPacientes);
routes.get('/users', listaUsuarios);
routes.get('/appointments', listaTodasAsConsultas);

routes.get('/doctors/:id', findDoctorById);

routes.post("/pacientes", adicionaPaciente);
routes.post("/doctors", adicionaMedico);
routes.post("/appointments", marcarConsulta);
routes.post('/users', criaUsuario);

routes.put('/doctors/:id', updateDoctor);

routes.delete('/doctors/:id', removeDoctor)




module.exports = routes;
