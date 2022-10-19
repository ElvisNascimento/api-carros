const vehicle = require('./controllers/vehicles');
const server = require('./server')

const host = 'localhost';
const port = '8000';


//criando o servidor do host
server.listen(port, host, () => {
    console.log(`API rodando no endereço ${host}:${port}`)
});
