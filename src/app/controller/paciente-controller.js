const { Paciente, PacienteValidation } = require('../model/paciente-model');

async function listaPacientes(req, res) {

  const { page, size } = req.params;

  const pacientes = await Paciente.find();
  res.status(200).json(pacientes);
}

async function adicionaPaciente(req, res) {

  if (!(PacienteValidation.isValid(req.body))) {
    return res.status(400).json({ error: 'Validação falhou' })
  }

  const paciente = await Paciente.create(req.body);

  return res.status(201).json({
    paciente,
    message: "Paciente criado com sucesso",
    status: "CREATED"
  });
}

async function buscaPacientePorId(req, res) {

  const { id } = req.params;

  const paciente = Paciente.findById(id);

  if (!paciente) {
    return res.status(404).json({ msg: 'Not found' });
  }

  res.status(200).json(paciente);
}

async function atualizaPaciente(req, res) {
  res.json('ok');
}

async function removePaciente(req, res) {
  const { id } = req.params;

  const paciente = Paciente.findById(id);

  if (!paciente) {
    return res.status(404).json({ msg: 'Not found' });
  }

  Paciente.deleteOne({ '_id': id });

  return res.status(200).json({ msg: 'Success' });
}

exports.listaPacientes = listaPacientes;
exports.adicionaPaciente = adicionaPaciente;
exports.removePaciente = removePaciente;
exports.buscaPacientePorId = buscaPacientePorId;
exports.atualizaPaciente = atualizaPaciente;