function add() {
    return 'adicionei um cliente';
}
function list() {
    return [
        {
            "contato": "Aleksa",
            "telefone": "1111111111",
            "cidade": "fortaleza",
            "id": "1"
        },
        {
            "contato": "Erika",
            "telefone": "222222222",
            "cidade": "Fortaleza",
            "id": "2"
        },
        {
            "contato": "Davi",
            "telefone": 333333333,
            "cidade": "cidade 3",
            "id": "3"
        },
        {
            "contato": "Xero Verde",
            "telefone": 4444444444444,
            "cidade": "cidade 4",
            "id": "4"
        },
        {
            "contato": "Elias",
            "telefone": 55555555555,
            "cidade": "cidade 5",
            "id": "5"
        },
        {
            "contato": "Adriele",
            "telefone": "666666666",
            "cidade": "cidade 6",
            "id": "6"
        },
        {
            "contato": "Mario",
            "telefone": 77777777,
            "cidade": "cidade 7",
            "id": "7"
        },
        {
            "contato": "Elvis",
            "telefone": 8888888888,
            "cidade": "cidade 8",
            "id": "8"
        },
        {
            "contato": "Guilherme",
            "telefone": 999999999,
            "cidade": "cidade 9",
            "id": "9"
        },
        {
            "contato": "Saor",
            "telefone": 110101010001,
            "cidade": "cidade 10",
            "id": "10"
        },
        {
            "contato": "Carlos",
            "telefone": 202020022,
            "cidade": "cidade 11",
            "id": "11"
        },
        {
            "contato": "Bruno",
            "telefone": 187182371,
            "cidade": "cidade 12",
            "id": "12"
        },
        {
            "contato": "Samuel",
            "telefone": 24242424242424,
            "cidade": "cidade 13",
            "id": "13"
        },
        {
            "contato": "Camila",
            "telefone": 23232323232,
            "cidade": "cidade 14",
            "id": "14"
        },
        {
            "contato": "Alicia",
            "telefone": 1213231231244,
            "cidade": "cidade 15",
            "id": "15"
        },
        {
            "contato": "Diene",
            "telefone": 1213432424,
            "cidade": "cidade 16",
            "id": "16"
        },
        {
            "contato": "Ciro",
            "telefone": 121212121212121,
            "cidade": "cidade 17",
            "id": "17"
        },
        {
            "contato": "Marcelo",
            "telefone": 1231412414,
            "cidade": "cidade 18",
            "id": "18"
        },
        {
            "contato": "Nathan",
            "telefone": 2836427423,
            "cidade": "cidade 19",
            "id": "19"
        },
        {
            "contato": "Comedor de casada",
            "telefone": "6666666666",
            "cidade": "cidade 20",
            "id": "20"
        },
        {
            "contato": "Sergio Piloto",
            "telefone": 193746234923,
            "cidade": "cidade 21",
            "id": "21"
        },
        {
            "contato": "Talyson",
            "telefone": 2938942407,
            "cidade": "cidade 22",
            "id": "22"
        },
        {
            "contato": "Neville",
            "telefone": 1937428734234,
            "cidade": "cidade 23",
            "id": "23"
        },
        {
            "contato": "Italo",
            "telefone": 173498236424,
            "cidade": "cidade 24",
            "id": "24"
        },
        {
            "contato": "Gleydson",
            "telefone": 23747326884,
            "cidade": "cidade 25",
            "id": "25"
        },
        {
            "contato": "Alessandro",
            "telefone": 666,
            "cidade": "cidade 26",
            "id": "26"
        },
        {
            "contato": "Allan",
            "telefone": 13,
            "cidade": "cidade 27",
            "id": "27"
        }
    ];
}
function update(id) {
    return 'editar um cliente';
}
function remove(id) {
    //pegou o array
    //pegou o id do objeto do array
    //removeu o objeto pelo id selecionado
    return 'remover um cliente';
}

module.exports = {
    add, //adicionar
    list, //listar
    update, //atualizar
    remove //remover
};