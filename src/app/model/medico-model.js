const mongoose = require('mongoose');
const yup = require('yup');

const medicoSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    especialidade: {
      type: String,
      required: true  
    },
    preco_por_consulta: {
      type: Number,
      require: true
    }
});

const medico = mongoose.model('medico',medicoSchema);
let medicoValidation = yup.object().shape({
  nome: yup.string().required(),
  especialidade: yup.string().required()
});

module.Medico = medico;
module.MedicoValidation = medicoValidation;