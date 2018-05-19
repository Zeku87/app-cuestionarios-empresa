const mongoose = require('mongoose');

const cuestionariosSchema = mongoose.Schema({
    'pregunta':{
        'enunciado':string,
        'respuestas':[string],
        'solucion':number
    },
    'tema':number,
    'evaluacion':{
        'tema':{
           tema_n:number,
           correctas:number,
           incorrectas:number,
           nota:number
        }
    }
});

module.exports = mongoose.model('Cuestionarios', cuestionariosSchema);