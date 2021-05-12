// @ts-ignore
const express = require('express'); // Express é utilizado para requisições de rotas

const router = express.Router(); // Utiliza-se para definir as rotas de usuário

const nodemailer = require('nodemailer'); // Classe de envio de e-mails

var transporter = nodemailer.createTransport({
    host: 'smtpi.kinghost.net',
    port: 587,
    secure: false,
    auth: {
      user: 'no-reply@tdkcorretora.com.br',
      pass: '49Unus38'
    },
    tls: { rejectUnauthorized: false }
});

router.post('/', async (req, res) => { // Definir a rota GET para verificar o login
    try{
        const { nome, email, telefone, motivo, mensagem } = req;

        var mailOptions = {
            from: '"CONTATO SITE", <contato@tdkcorretora.com.br>',
            to: 'gabriel.sa.kruger@gmail.com',
            subject: `[TDK Corretora] Contato Site`,
            html: `
                <table>
                    <tr>
                        <td><b> NOME </b></td>
                        <td> ${nome} </td>
                    </tr>
                    <tr>
                        <td><b> E-MAIL </b></td>
                        <td> ${email} </td>
                    </tr>
                    <tr>
                        <td><b> TELEFONE </b></td>
                        <td> ${telefone} </td>
                    </tr>
                    <tr>
                        <td><b> MOTIVO </b></td>
                        <td> ${motivo} </td>
                    </tr>
                    <tr>
                        <td><b> MENSAGEM </b></td>
                        <td> ${mensagem} </td>
                    </tr>
                </table>
            `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                return res.send({ errorcode: 'error', error }); // Retornará todos os dados
            } else{
                return res.send({ errorcode: 'none', response: info.response }); // Retornará todos os dados
            }
        });
    } catch(error){
        return res.status(400).send({ error, errorcode: 'mail_send_error' });
    }
});

module.exports = (app) => app.use('/mail', router); // Como o 'app' foi repassado pelo 'index.ts' ele é parte da função; Ele retornará uma rota para o acesso de '/projects' e o 'router' será chamado