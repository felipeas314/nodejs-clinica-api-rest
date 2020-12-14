const { Router } = require('express');
const asyncHandler = require('express-async-handler')

const routes = new Router();

const { logMiddleware,tokenMiddleware,validationErrorsMiddleware } = require('./app/middlewares');
const { listaPacientes, adicionaPaciente } = require("./app/controller/paciente-controller");
const { adicionaMedico, listaMedicos, removeDoctor, findDoctorById, updateDoctor } = require('./app/controller/medico-controller');
const { marcarConsulta, listaTodasAsConsultas } = require('./app/controller/consulta-controller');
const { criaUsuario, listUser, findUserById, deleteUser, updateUser } = require('./app/controller/usuario-controller');
const { login } = require('./app/controller/auth-controller');

routes.get('/health', (req, res) => {
  res.status(200).json({
    message: 'Server Up.',
    date: new Date()
  });
});

routes.use(logMiddleware);

routes.get("/doctors", listaMedicos);
routes.post('/login',login);

routes.use(tokenMiddleware);

//Precisa logar no sistema
routes.get("/pacientes", listaPacientes);
routes.get('/users', listUser);
routes.get('/appointments', listaTodasAsConsultas);


routes.get('/doctors/:id', findDoctorById);
routes.get('/users/:id', findUserById);


routes.post("/pacientes", adicionaPaciente);
routes.post("/doctors", adicionaMedico);
routes.post("/appointments", marcarConsulta);
routes.post('/users', asyncHandler(criaUsuario));


routes.put('/doctors/:id', updateDoctor);
routes.put('/users/:id', updateUser);

routes.delete('/doctors/:id', removeDoctor)
routes.delete('/users/:id', deleteUser);

routes.use(validationErrorsMiddleware);

module.exports = routes;
