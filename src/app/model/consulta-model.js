const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const connection = require('../database/postgresql');

const { Paciente } = require('../model/paciente-model');
const { Medico } = require('../model/medico-model');

class Consulta extends Model { }

Consulta.init(
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: Sequelize.UUIDV4
        },
        confirmou: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        desmarcou: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    },
    {
        sequelize: connection,
        tableName: 'consultas'
    }
)

Consulta.belongsTo(Paciente, {
    foreignKey: {
        name: 'paciente_id'
    }
});
Consulta.belongsTo(Medico, {
    foreignKey: {
        name: 'medico_id'
    }
});

exports.Consulta = Consulta;