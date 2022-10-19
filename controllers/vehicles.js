function add() {
    return 'adicionei um veiculo';
}
function list() {
    return 'listar veiculo';
}
function update(id) {
    return 'editar um veiculo';
}
function remove(id) {
    return 'remover um veiculo';
}

module.exports = {
    add, //adicionar
    list, //listar
    update, //atualizar
    remove //remover
};