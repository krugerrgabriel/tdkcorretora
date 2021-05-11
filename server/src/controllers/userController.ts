// @ts-ignore
const express = require('express');

// @ts-ignore
const Company = require('../models/company.ts');

const router = express.Router();

// Rota para listar fretes
router.get('/', async (req, res) => {
    try{
        const companys = await Company.find().populate(['user']);

        return res.send(companys);
    } catch(error){
        return res.status(400).send({ error: 'companys_list_error' });
    }
});

// Rota para buscar informações sobre frete
router.get('/:companyId', async (req, res) => {
    try{
        const company = await Company.findById(req.params.companyId);

        return res.send({ company: company, message: 'company_info_success' });
    } catch(error){
        return res.status(400).send({ error: 'company_info_error' });
    }
});

// Rota de registro de frete
router.post('/', async (req, res) => {
    try{
        const { name, image } = req.body;
        
        const company = await Company.create({ name, image });

        await company.save();

        return res.send({ company: company, message: 'company_register_success' });
    } catch(error){
        console.log(error);
        return res.status(400).send({ error: 'company_register_error' });
    }
});

// Rota para alterar dados
router.put('/:companyId', async (req, res) => {
    try{
        if(!req.body.name || !req.body.image){
            return res.send({ error: 'company_edit_null-fields' });
        }
        const { name, image } = req.body;

        const company = await Company.findByIdAndUpdate(req.params.companyId, {
            name,
            image
        }, { new: true });

        await company.save();

        return res.send({ company: company, message: 'company_edit_success' });
    } catch(error){
        return res.status(400).send({ error: 'company_edit_error', error_code: error });
    }
});

// Rota para deletar frete
router.delete('/:companyId', async (req, res) => {
    try{
        const company = await Company.findByIdAndRemove(req.params.companyId);

        return res.send({ message: 'company_delete_success' });
    } catch(error){
        return res.status(400).send({ error: 'company_delete_error' });
    }
});

module.exports = (app) => app.use('/company', router);