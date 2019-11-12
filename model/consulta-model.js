const mongoose = require('mongoose');

const consultaSchema = new mongoose.Schema({

    sintomas: [
        {
            descricao: {
                type: String
            }
        }
    ],
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
    },
    confirmada: {
        type: Boolean,
        default: false
    },
    paciente_faltou: {
        type: Boolean
    },
    particula: {
        type: Boolean,
        required: true
    }
});

const consulta = mongoose.model('consulta', consultaSchema);

module.exports = consulta;