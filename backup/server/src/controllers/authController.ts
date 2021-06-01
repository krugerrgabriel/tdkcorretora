const express = require('express'); // Express é utilizado para requisições de rotas
const jwt = require('jsonwebtoken'); // JWT é utilizado para a criação de tokens

import { ParamsType, userInterface } from '../interfaces/authControllerInterface'; // Importação dos tipos do authController

const authConfig = require('../configs/authConfig.json'); // Importação do arquivo de configurações

// @ts-ignore
const User = require('../models/User.ts'); // Armazenar o modelo do 'User'

const router = express.Router(); // Utiliza-se para definir as rotas de usuário


const generateToken = (params:ParamsType) => { // Função para gerar um token
    return jwt.sign(params, authConfig.secretKeyTest, { // 'jwt.sign' usado para gerar um token; 'params' recebe o ID do usuário; 'authConfig.secretKeyTest' é o valor da chave da aplicação 'test'
        expiresIn: 86400, // Em quanto tempo (segundos) a sessão será expirada
    });
}

router.post('/register', async (req, res) => {  // Definir a rota POST de cadastro

    const { email } = req.body; // Armazenando o e-mail do 'req.body'

    try { // 'try/catch' é utilizado para capturar erros da aplicação

        if(await User.findOne({ email })){ // Verificar se existe um usuário com esse e-mail
            return res.status(400).send({ error: 'User e-mail already exists D:' });
        }

        const user:userInterface = await User.create(req.body); // User.create usado para criar um novo cadastro; Os dados da resposta ficam dentro de 'req.body'

        user.password = undefined; // Definir 'password' como 'undefined' para não retornar

        return res.send({
            user,
            token: generateToken({ id: user.id })
        }); // Se o usuário for cadastrado ele será retornado com um token

    } catch (error){ // 'catch' é executado quando o script da erro
        return res.status(400).send({ error: 'Registration failed D:' }); // Caso der erro enviar um código 400 para o client com uma mensagem de erro
    }

});

router.post('/authenticate', async (req, res) => { // Definir rota POST de autentificação

    const { email, password } = req.body; // Puxando o e-mail e senha do body da requisição

    const user:userInterface = await User.findOne({ email }).select('+password'); // Verificando se existe um usuário com esse e-mail e, se existir, puxando seu e-mail e senha

    if(!user){
        return res.status(400).send({ error: 'User not found' }); // Se não houver um usuário com o e-mail igual ao da requisição é retornada uma mensagem de erro
    }
    if(password !== user.password){
        return res.status(400).send({ error: 'Invalid password' }); // Se o usuário estiver com uma senha diferente ao da requisição é retornada uma mensagem de erro
    }

    user.password = undefined; // Definir 'password' como 'undefined' para não retornar
    
    res.send({
        user,
        token: generateToken({ id: user.id }),
    }); // Caso o usuário existir ele será retornado com um token

});

module.exports = (app) => app.use('/auth', router); // Como o 'app' foi repassado pelo 'index.ts' ele é parte da função; Ele retornará uma rota para o acesso de '/auth/register' e o 'router' será chamado