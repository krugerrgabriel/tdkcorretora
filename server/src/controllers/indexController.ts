// @ts-ignore
const express = require('express');

// @ts-ignore
const Company = require('../models/company.ts');

// @ts-ignore
const router = express.Router();

// Rota para listar fretes
router.get('/', async (req, res) => {
    try{
        return res.send({ message: 'server_status_check' });
    } catch(error){
        return res.status(400).send({ error: 'server_status_error' });
    }
});


// Rota de registro de frete
router.post('/', async (req, res) => {
    try{
        return res.send({ message: 'server_status_check' });
    } catch(error){
        console.log(error);
        return res.status(400).send({ error: 'server_status_error' });
    }
});

// Rota para alterar dados
router.put('/', async (req, res) => {
    try{
        return res.send({ message: 'server_status_check' });
    } catch(error){
        return res.status(400).send({ error: 'server_status_error' });
    }
});

// Rota para deletar frete
router.delete('/', async (req, res) => {
    try{
        return res.send({ message: 'server_status_check' });
    } catch(error){
        return res.status(400).send({ error: 'server_status_error' });
    }
});

module.exports = (app) => app.use('/', router);