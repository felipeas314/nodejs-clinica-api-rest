const mongoose = require('mongoose');

const consultaSchema = new mongoose.Schema({

    receita: [
        {
            remedio: {
                type: String
            },
            mg: {
                type: String
            },
            vezes_por_dia: {
                type: String
            }
        }
    ],
    paciente: {
        id: {
            type: String
        },
        nome: {
            type: String
        }
    },
    medico: {
        id: {
            type: String
        },
        nome: {
            type: String
        }
    },
    data_da_consulta: {
        type: Date,
        required: true
    }
});

const consulta = mongoose.model('consulta', consultaSchema);

module.exports = consulta;