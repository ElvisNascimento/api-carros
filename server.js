const http = require('http');
const router = require('./router');

// funcao que é executada a cada request
const eachRequest = (req, res) => {

    //definindo tipo de resposta para json
    res.setHeader('Content-Type', 'application/json');

    //pegar rota da request
    let { url, method } = req;

    //definindo conteudo da resposta
    let content = '';
    try {
        content = JSON.stringify(
            router(url, method)
        );
    } catch (error) {
        res.writeHead(error);
    }

    //respondendo pro httpClient
    res.end(content);
};

//criando o servidor web
module.exports = http.createServer(eachRequest);

