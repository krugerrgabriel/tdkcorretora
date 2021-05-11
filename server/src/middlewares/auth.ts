const jwt = require('jsonwebtoken'); // JWT é utilizado para a criação de tokens
const authConfig = require('../configs/authConfig.json'); // Importação do arquivo de configurações

module.exports = (req, res, next) => { // Exportar o middleware de autenficação

    const authHeader = req.headers.authorization; // Puxando o token de verificação da requisição

    if(!authHeader){ // Verificando se há token de verificação
        return res.status(401).send({ error: 'No token provided' });
    }

    const tokenParts = authHeader.split(' '); // Separando o token em 2 partes, a primeira deve haver 'Bearer' e a segunda um hash

    if(tokenParts.length !== 2){ // Verificando se o token tem 2 partes
        return res.status(401).send({ error: 'Token error' });
    }

    const [ scheme, token ] = tokenParts; // Dividindo as partes do token em duas variáveis

    if(!/^Bearer$/i.test(scheme)){ // Verificando se a primeira parte do token contém 'Bearer'
        return res.status(401).send({ error: 'Token malformatted' });
    }

    jwt.verify(token, authConfig.secretKeyTest, (error, decoded) => { // Verificar se os tokens batem

        if(error){ // Verificando se há um erro
            return res.status(401).send({ error: 'Token invalid' });
        }

        req.userId = decoded.id; // Se não houver erro, o userId da requisição é alimentada com o ID
        next(); // Se for autenticado a aplicação continua
        
    });

}