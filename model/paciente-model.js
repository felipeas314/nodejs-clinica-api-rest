const mongoose = require("mongoose");
const yup = require('yup');

const pacienteSchema = new mongoose.Schema({

  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  endereco: {
    rua: {
      type: String
    },
    numero: {
      type: String
    },  
    bairro: {
      type: String
    }
  }
});

const paciente = mongoose.model("paciente", pacienteSchema);

let pacienteValidation = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().required()
});

exports.Paciente = paciente;
exports.PacienteValidation = pacienteValidation;