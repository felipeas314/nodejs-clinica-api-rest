const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const yup = require('yup');

const connection = require('../database/postgresql');

class Paciente extends Model { }

Paciente.init(
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
    tableName: 'pacientes'
  }
)


let pacienteValidation = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().required()
});

exports.Paciente = Paciente;
exports.PacienteValidation = pacienteValidation;