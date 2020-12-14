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
  const { id } = req.params;

  await Consulta.update(
    {
      desmarcou: true
    },
    {
      where: {
        id
      }
    })

    res.status(200).json({
      message:'Consulta cancelado com sucesso',
      status: 'OK',
      date: new Date()
    })
}

async function confirmarConsulta(req,res) {
  const { id } = req.params;

  await Consulta.update(
    {
      confirmou: true
    },
    {
      where: {
        id
      }
    })

    res.status(200).json({
      message:'Consulta confirmada com sucesso',
      status: 'OK',
      date: new Date()
    })
}


async function buscaConsultaPorMedico(req,res){
  
}

exports.marcarConsulta = marcarConsulta;
exports.listaTodasAsConsultas = listaTodasAsConsultas;
exports.cancelarConsulta = cancelarConsulta;
exports.confirmarConsulta = confirmarConsulta;