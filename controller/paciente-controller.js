const { Paciente, PacienteValidation } = require('../model/paciente-model');

async function listaPacientes(req,res) {
  const pacientes = await Paciente.find();
  res.status(200).json(pacientes);
}

async function adicionaPaciente(req,res){

  if(!(PacienteValidation.isValid(req.body))){
    return res.status(400).json({error:'Validação falou'})
  }

  const paciente = await Paciente.create(req.body);

  return res.status(202).json(paciente);
}

function buscaPacientePorId(req,res) {
  res.json('ok');
}

function atualizaPaciente(req,res) {
  res.json('ok');
}

function removePaciente(req,res) {
  res.json('ok');
}

exports.listaPacientes = listaPacientes;
exports.adicionaPaciente = adicionaPaciente;