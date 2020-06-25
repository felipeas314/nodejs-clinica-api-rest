const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const yup = require('yup');

const connection = require('../database/postgresql');

class Medico extends Model { }

Medico.init(
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    sequelize: connection,
    tableName: 'medicos'
  }
)


let medicoValidation = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().required()
});

exports.Medico = Medico;
exports.MedicoValidation = medicoValidation;