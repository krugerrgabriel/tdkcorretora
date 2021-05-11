// @ts-ignore
const mongoose = require('../database/index.ts'); // Mongoose para interação com o MongoDB

const UserSchema = new mongoose.Schema({ // Criação do Schema do Usuário

    // Cada objeto é um campo no Schema
    name: {
        type: String, // Tipo do Campo
        require: true, // Se é preciso ser preenchido
    },
    email: {
        type: String,
        unique: true, // Se é único
        required: true, 
        lowercase: true, // Forçar para ser letra minúscula
    },
    password: {
        type: String,
        required: true,
        select: false, // Quando o usuário for consultado, esse campo não irá junto
    },
    createdAt: {
        type: Date,
        default: Date.now, // Definindo valor padrão do campo
    },

});

const User = mongoose.model('User', UserSchema); // Definindo o Model User como o Schema User

module.exports = User; // Exportando o Model User