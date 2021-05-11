// @ts-ignore
const mongoose = require('mongoose'); // Mongoose para interação com o MongoDB

mongoose.connect('mongodb+srv://tdk-user:49Unus38@tdkcorretora-main.wnm2w.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true }); // Conectando com o BD
mongoose.Promise = global.Promise;

module.exports = mongoose; // Exportando módulo