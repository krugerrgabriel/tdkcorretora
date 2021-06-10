// @ts-ignore
const express = require('express'); // Express é utilizado para requisições de rotas

import { reqSeguroInterface, seguroInterface } from '../interfaces/segurosInterface';

// @ts-ignore
const Seguro = require('../models/seguro.ts'); // Importação do model de 'Project'

const router = express.Router(); // Utiliza-se para definir as rotas de usuário

router.get('/', async (req:reqSeguroInterface, res) => { // Definir a rota GET para verificar o login
    try{
        const seguros = await Seguro.find(); // 'find()' é utilizado para pesquisar um certo dado no Scheme 'Project', já que está vazio ele vai retornar todos os dados; o 'populate()' é usado para fazer duas requisições em uma única query, já que está preenchido com 'user', ele vai retornar os dados do usuário no campo 'user'

        return res.send({ errorcode: 'none', seguros }); // Retornará todos os dados
    } catch(error){
        return res.status(400).send({ error, errorcode: 'seguros_list_error' });
    }
});

router.get('/:seguroId', async (req:reqSeguroInterface, res) => {
    try{
        const seguros = await Seguro.findById(req.params.seguroId); // 'findById()' é utilizado para pesquisar um dado com o Id fornecido, que no caso é o 'red.params.projectId' que é o ':projectId' fornecido na URL
        
        return res.send({ errorcode: 'none', seguros });
    } catch(error){
        return res.status(400).send({ error, errorcode: 'seguro_list_error' });
    }
});

router.post('/', async (req:reqSeguroInterface, res) => { // Definir a rota POST para criar um novo dado
    try{
        const { title, description, salesPhrase, pageName, pins, icon, coverage, assistance, questions } = req.body; // Desestruturar a body da requisição
        
        const seguro:seguroInterface = await Seguro.create({ title, description, salesPhrase, pageName, pins, coverage, assistance, questions, icon }); // Irá criar um novo dado com o body da requisição e também com o 'userId' informado na requisição também

        await seguro.save(); // '.save()' para as alterações do project serem salvas no DB

        return res.send({ errorcode: 'none', seguro });
    } catch(error){
        return res.status(400).send({ error, errorcode: 'seguro_create_error' });
    }
});

// Rota para alterar dados
router.put('/:seguroId', async (req, res) => {
    try{
        if(!req.body.title){
            return res.send({ errorcode: 'seguro_edit_null-fields' });
        }
        const { title, description, salesPhrase, pageName, pins, icon, coverage, assistance, questions } = req.body;

        const seguro = await Seguro.findByIdAndUpdate(req.params.seguroId, {
            title, description, salesPhrase, pageName, pins, coverage, assistance, questions, icon
        }, { new: true });

        await seguro.save();

        return res.send({ errorcode: 'none', seguro: seguro });
    } catch(error){
        return res.status(400).send({ error: error, errorcode: 'seguro_edit_error' });
    }
});

router.delete('/:seguroId', async (req:reqSeguroInterface, res) => { // Definir a rota DELETE para a exclusão de dados
    try{
        const seguro = await Seguro.findByIdAndRemove(req.params.seguroId); // 'findByIdAndRemove()' é utilizado para procurar um determinado dado pelo Id e deletar o mesmo

        return res.send({ errorcode: 'none', message: 'seguro_delete_success' });
    } catch(error){
        return res.status(400).send({ error, errorcode: 'seguro_delete_error' });
    }
});

module.exports = (app) => app.use('/seguros', router); // Como o 'app' foi repassado pelo 'index.ts' ele é parte da função; Ele retornará uma rota para o acesso de '/projects' e o 'router' será chamado