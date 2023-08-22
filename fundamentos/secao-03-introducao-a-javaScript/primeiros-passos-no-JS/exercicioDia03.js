//aula 3
//Função para Boas vindas (Funções, objetos e Arrays)

function boasVindas (pessoaEstudante){
    return `Olá ${pessoaEstudante}, tudo bem com você?`;
}

console.log(boasVindas('Claudiomar'));
console.log(boasVindas('Alison'));
console.log(boasVindas('joicy'));
console.log(boasVindas('enza'));
console.log(boasVindas('carol'));
console.log(boasVindas('mari'));

function Bemvindo (pessoaEstudante){
    return `Olá ${pessoaEstudante}, tudo bem com você?`;
}

const Bemvindo2 = (pessoaEstudante) => {
    return `Olá ${pessoaEstudante}, tudo bem com você?`;
}

console.log(Bemvindo('Claudiomar'));

let andar = 0;
const maximoAndares = 10;
//subir 1 andar:
const subirUmAndar = () => {
    if (andar < maximoAndadres){
    andar += 1;
    }
}
//descer 1 andar:
const descerUmAndar = () => {
    if (andar > 0) {
    andar += 1;
    }
}
console.log(andar)

//Calculadora
const somar = (valor1, valor2) =>{
    if (typeof valor1 === 'number' && typeof valor2 === 'number'){
    return valor1 + valor2;
    } else {
        return 'Informe um valor válido!!!'
    }
};
const subtrair = (valor1, valor2) =>{
    return valor1 - valor2;
};
console.log(somar(2, 5));

//carrinho de compras
const itensCarro = ['Relógio', 'Luva Térmica', 'Livro', 'Creme'];

const addItens = (itemNovo) => {
    for (let index = 0; index < itemNovo.lenght; index += 1){
        itensCarro.push(itemNovo[index]);
    }
}

const totalizadoritens = () => {
    return itensCarro.lenght;
}

addItens(['Fralda', 'Abajur', 'Oculos']);
const retornoDaFuncao = totalizadoritens();
console.log(itensCarro);

//funcao que soma todos os valores de um array

const arrayValores = [99, 150, 299, 300]; // x

const totalizaValoresCarrinho = () => {
    for (let indice = 0; indice < arrayValores.lenght; indice +=1){
        soma = soma + arrayValores[indice];
    }
}

totalizaValoresCarrinho();arrayValores
