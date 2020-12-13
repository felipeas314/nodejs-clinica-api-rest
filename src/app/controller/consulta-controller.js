const { Consulta } = require('../model/consulta-model');

const { Medico } = require('../model/medico-model');
const { Paciente } = require('../model/paciente-model');

async function marcarConsulta(req, res) {

  const consulta = await Consulta.create(req.body);

  res.status(200).json({
    content: consulta,
    status: 'OK',
  });
}

async function listaTodasAsConsultas(req, res) {

  const consultas = await Consulta.findAll({
    include: [Paciente, Medico]
  });

  res.status(200).json({
    content: consultas
  })
}

async function cancelarConsulta(req,res) {

}

async function buscaConsultaPorMedico(req,res){
  
}

exports.marcarConsulta = marcarConsulta;
exports.listaTodasAsConsultas = listaTodasAsConsultas;