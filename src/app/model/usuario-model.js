const mongoose = require("mongoose");
const yup = require('yup');

const usuarioSchema = new mongoose.Schema({

  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
      type: String,
      required: true
  }

});

const usuario = mongoose.model("usuario", usuarioSchema);

let usuarioValidation = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required()
});

exports.Usuario = usuario;
exports.UsuarioValidation = usuarioValidation;