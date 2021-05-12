// @ts-ignore
const mongoose = require('../database/index.ts'); // Mongoose para interação com o MongoDB

const SeguroSchema = new mongoose.Schema({ // Criação do Schema do Usuário

    // Cada objeto é um campo no Schema
    title: {
        type: String, // Tipo do Campo
        require: true, // Se é preciso ser preenchido
    },
    information: {
        type: String,
        required: true, 
    },
    description: {
        type: String,
        require: true,
    },
    salesPhrase: {
        type: String,
        require: true,
    },
    pageName: {
        type: String,
        require: true,
    },
    pins: {
        type: [
            {
                name: String,
            }
        ],
        required: true,
    },
    coverage: {
        type: [
            {
                image: String,
                title: String,
                description: String,
            }
        ],
        required: true,
    },
    assistance: {
        type: [
            {
                icon: String,
                title: String,
                description: String,
            }
        ],
        required: true,
    },
    questions: {
        type: [
            {
                question: String,
                answer: String,
            }
        ],
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Definindo valor padrão do campo
    },

});

const Seguro = mongoose.model('Seguro', SeguroSchema); // Definindo o Model Seguro como o Schema Tweet

module.exports = Seguro; // Exportando o Model User