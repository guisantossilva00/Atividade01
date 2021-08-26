var listaDePeca = ["Filtro de oleo", "Fusivel", "vela", "Correia Dentada"]

if (listaDePeca.length < 10) {
    console.log("É possivel cadastrar mais peças")
} else {
    console.log("Não tem mais espaço nessa lista, impossivel cadastrar mais peças");
}

let peso = 150;

if (peso < 100) {
    console.log("A peça deve pesar no mínimo 100g")
} else {
    console.log("A peça possui peso adequado")
} 

let nomePeca = "La";

switch (nomePeca.length) {
    case 0:
        console.log("O nome da peça não pode ser vazio")
        break;

    case 1:
    case 2:
    case 3:
        console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado.")
        break;

    default:
        console.log("Nome da peça está adequado para o cadastro!!")
        break;
}