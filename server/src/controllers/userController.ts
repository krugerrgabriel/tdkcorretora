// @ts-ignore
const express = require('express');

// @ts-ignore
const User = require('../models/user.ts');

const router = express.Router();

var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
});
var upload = multer({ storage: storage }).single('file');

// Rota de registro de frete
router.post('/', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try{
        const { name, phone, role } = req.body;
        console.log(req);
        
        const user = await User.create({ name, phone, role });

        await user.save();

        upload(req, res, (err) => {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err)
            } else if (err) {
                return res.status(500).json(err)
            }
            return res.status(200).send({ errorcode: 'none', user, file: req.file});
        });

        return res.send({ errorcode: 'none', user: user });
    } catch(error){
        return res.status(400).send({ errorcode: 'user_register_error', error });
    }
});

// Rota para listar fretes
router.get('/', async (req, res) => {
    try{
        const user = await User.find();

        return res.send({ errorcode: 'none', user: user});
    } catch(error){
        return res.status(400).send({ errorcode: 'user_list_error' });
    }
});

// Rota para buscar informações sobre frete
router.get('/:userId', async (req, res) => {
    try{
        const user = await User.findById(req.params.userId);

        return res.send({ errorcode: 'none', user: user });
    } catch(error){
        return res.status(400).send({ errorcode: 'user_info_error', error });
    }
});

// Rota para alterar dados
router.put('/:userId', async (req, res) => {
    try{
        if(!req.body.name || !req.body.image){
            return res.send({ error: 'user_edit_null-fields' });
        }
        const { name, image } = req.body;

        const user = await User.findByIdAndUpdate(req.params.userId, {
            name,
            image
        }, { new: true });

        await user.save();

        return res.send({ user: user, errorcode: 'none' });
    } catch(error){
        return res.status(400).send({ errorcode: 'user_edit_error', error });
    }
});

// Rota para deletar frete
router.delete('/:userId', async (req, res) => {
    try{
        const user = await User.findByIdAndRemove(req.params.userId);

        return res.send({ errorcode: 'none', message: 'user_delete_success' });
    } catch(error){
        return res.status(400).send({ errorcode: 'user_delete_error', error });
    }
});

module.exports = (app) => app.use('/user', router);