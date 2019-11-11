const mongoose = require('mongoose');

const medicoSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    especialidade: {
      type: String,
      required: true  
    }
});

const medico = mongoose.model('medico',medicoSchema);

module.exports = medico;