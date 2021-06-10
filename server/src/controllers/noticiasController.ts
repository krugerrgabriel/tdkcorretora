// @ts-ignore
const express = require('express'); // Express é utilizado para requisições de rotas

import { reqNoticiaInterface, noticiaInterface } from '../interfaces/noticiasInterfaces';

// @ts-ignore
const Noticia = require('../models/noticia.ts'); // Importação do model de 'Project'

const path = require("path"); // Liberar acesso ao servidor
const multer = require("multer"); // Liberar acesso ao servidor
const helpers = require('../helpers');

const router = express.Router(); // Utiliza-se para definir as rotas de usuário

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'src/public/landing/images/');
    },
    filename: function(req, file, cb) {
        let date = new Date;
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let seconds = date.getSeconds();
        let finalDate = `${day}${month}${year}${hour}${minute}${seconds}`;

        cb(null, finalDate + path.extname(file.originalname));
    }
});

router.get('/all/:limit?', async (req:reqNoticiaInterface, res) => { // Definir a rota GET para verificar o login
    try{
        const limit = req.params.limit ? Number(req.params.limit) : 999;
        const noticias = await Noticia.find().limit(limit); // 'find()' é utilizado para pesquisar um certo dado no Scheme 'Project', já que está vazio ele vai retornar todos os dados; o 'populate()' é usado para fazer duas requisições em uma única query, já que está preenchido com 'user', ele vai retornar os dados do usuário no campo 'user'

        return res.send({ errorcode: 'none', noticias }); // Retornará todos os dados
    } catch(error){
        return res.status(400).send({ error, errorcode: 'noticias_list_error' });
    }
});

router.get('/:noticiaId', async (req:reqNoticiaInterface, res) => {
    try{
        const noticias = await Noticia.findById(req.params.noticiaId); // 'findById()' é utilizado para pesquisar um dado com o Id fornecido, que no caso é o 'red.params.projectId' que é o ':projectId' fornecido na URL

        return res.send({ errorcode: 'none', noticias });
    } catch(error){
        return res.status(400).send({ error, errorcode: 'noticia_list_error' });
    }
});

router.post('/', async (req:reqNoticiaInterface, res) => { // Definir a rota POST para criar um novo dado
    try{
        
        let upload = multer({ storage: storage, fileFilter: helpers.imageFilter }).single('file');

        upload(req, res, async (err) => {
            const { title, description, descriptionMinimized } = req.body; // Desestruturar a body da requisição
            let date = new Date;
            let day = date.getDate();
            let month = date.getMonth();
            let year = date.getFullYear();
            let hour = date.getHours();
            let minute = date.getMinutes();
            let seconds = date.getSeconds();
            let image = `${day}${month}${year}${hour}${minute}${seconds}`;
            if (req.fileValidationError) {
                console.log(err);
                return res.status(400).send({ error: err, errorcode: 'image_upload_error' });
            } else if (!req.file) {
                console.log(err);
                return res.status(400).send({ error: err, errorcode: 'image_upload_error' });
            } else if (err instanceof multer.MulterError) {
                console.log(err);
                return res.status(400).send({ error: err, errorcode: 'image_upload_error' });
            } else if (err) {
                console.log(err);
                return res.status(400).send({ error: err, errorcode: 'image_upload_error' });
            }
            const noticia:noticiaInterface = await Noticia.create({ title, description, descriptionMinimized, image }); // Irá criar um novo dado com o body da requisição e também com o 'userId' informado na requisição também

            await noticia.save(); // '.save()' para as alterações do project serem salvas no DB

            return res.send({ errorcode: 'none', noticia });
        });
        
    } catch(error){
        return res.status(400).send({ error, errorcode: 'noticia_create_error', });
    }
});

// Rota para alterar dados
router.put('/:noticiaId', async (req, res) => {
    try{
        const { image } = req.body;

        const noticia = await Noticia.findByIdAndUpdate(req.params.noticiaId, {
            image
        }, { new: true });

        await noticia.save();

        return res.send({ noticia, errorcode: 'none' });
    } catch(error){
        return res.status(400).send({ errorcode: 'noticia_edit_error', error });
    }
});

router.delete('/:noticiaId', async (req:reqNoticiaInterface, res) => { // Definir a rota DELETE para a exclusão de dados
    try{
        const noticia = await Noticia.findByIdAndRemove(req.params.noticiaId); // 'findByIdAndRemove()' é utilizado para procurar um determinado dado pelo Id e deletar o mesmo

        const noticias = await Noticia.find();
        
        return res.send({ errorcode: 'none', message: 'noticia_delete_success', noticias });
    } catch(error){
        return res.status(400).send({ error, errorcode: 'noticia_delete_error' });
    }
});

module.exports = (app) => app.use('/noticias', router); // Como o 'app' foi repassado pelo 'index.ts' ele é parte da função; Ele retornará uma rota para o acesso de '/projects' e o 'router' será chamado