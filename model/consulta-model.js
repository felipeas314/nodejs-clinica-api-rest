const mongoose = require('mongoose');

const consultaSchema = new mongoose.Schema({

    receita: [
        {
            remedio: {
                type: String
            }
        }
    ]
});