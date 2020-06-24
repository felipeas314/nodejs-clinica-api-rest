const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const yup = require('yup');

const connection = require('../database/postgresql');

class Paciente extends Model { }

Paciente.init(
  {
    id: {
      type: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
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