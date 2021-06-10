// @ts-ignore
const mongoose = require('../database/index.ts'); // Mongoose para interação com o MongoDB

const NoticiaSchema = new mongoose.Schema({ // Criação do Schema do Usuário

    // Cada objeto é um campo no Schema
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    descriptionMinimized: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Definindo valor padrão do campo
    },

});

const Noticia = mongoose.model('Noticia', NoticiaSchema); // Definindo o Model Seguro como o Schema Tweet

module.exports = Noticia; // Exportando o Model User