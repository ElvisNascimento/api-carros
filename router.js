const custumers = require('./controllers/custumers');
const vehicles = require('./controllers/vehicles');
const routes = {
    '/custumers': {
        'GET': custumers.list,
        'POST': custumers.add,
        'PUT': custumers.update,
        'DELETE': custumers.remove,
    },
    '/vehicles': {
        'GET': vehicles.list,
        'POST': vehicles.add,
        'PUT': vehicles.update,
        'DELETE': vehicles.remove,
    },
}

function router(url, method) {
    //a url representa qual controller vai ser executado
    //o method representa qual funcao do controller vai ser executa
    if (!routes[url]) {
        throw "404";
    }
    if (!routes[url][method]) {
        throw "405";
    }
    return routes[url][method]();
}
module.exports = router;