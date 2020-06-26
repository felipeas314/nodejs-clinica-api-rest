const Sequelize = require('sequelize');
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

exports.Usuario = Usuario;