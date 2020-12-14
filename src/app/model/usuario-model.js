const Sequelize = require('sequelize');
const yup = require('yup');
const Model = Sequelize.Model;

const connection = require('../database/postgresql');

class Usuario extends Model { }

Usuario.init(
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4
    },
    nome: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    senha: {
      type: Sequelize.STRING
    },
    role: {
      type: Sequelize.STRING
    },
  },
  {
    sequelize: connection,
    modelName: 'usuario'
  }
)
let usuarioValidation = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().required(),
  senha: yup.string().required(),
  role: yup.string().required()
});

exports.Usuario = Usuario;
exports.UsuarioValidation = usuarioValidation;