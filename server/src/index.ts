// @ts-ignore
const express = require('express'); // Express é utilizado para requisições de rotas
const bodyParser = require('body-parser'); // Body-parser é utilizado para utilização de Json

const app = express(); // Definindo a constante app para utilizar o express

app.use(bodyParser.json()); // Utilizar o bodyParser para a aplicação entender as requisições em json
app.use(bodyParser.urlencoded({ extended: false })); // Entender quando passar parâmetros via URL
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

/* app.get('/', (req, res) => {}); - Sintaxe para a criação de uma rota {
    '/' - Rota para o acesso
    req - Contém as informações da requisição
    res - Contém a resposta que o servidor vai enviar
} */

app.get('/', (req, res) => {
  res.send(`Servidor da TDK Corretora`);
});

require('./controllers/segurosController.ts')(app); // o 'app' foi repassado pois é uma instância única na aplicação

app.listen(3001); // Utilizar a porta 3001 para as requisições