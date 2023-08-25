//aula 3
//Função para Boas vindas
//a estrutura da função começa chamando o seu comando (function) e dando um nome para ele.
//aprimos os parenteses e colocamos as variaveis que serão usadas para essa função em especifico, sem precisar declarar o tipo, apenas inserindo um nome para elas
//depois de colocar as variaveis, abrimos chaves onde vamos colocar o retorno dessa função, que é o que ela vai nos mostrar quando for chamada com um console.log
//é no retorno também que colocamos nossos calculos ou qualquer coisa que queremos que seja feita por essa função, e apos isso fehcar a chave
//fora da função chamados o console.log(nome da função()). dentro desse segundo parenteses é que colocamos os valores das nossas variaveis dessa função.
//caso tenha mais que uma variavel só separar pela virgula, ela vai adicionar sempre da esquerda para a direita.

//função com parametros
function sum(num1, num2) {
    return num1 + num2;
};
console.log(sum(10, 8));


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


//Arrow Function, ou função com flechas (???)

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
let soma = 0;

const totalizaValoresCarrinho = () => {
    for (let indice = 0; indice < arrayValores.lenght; indice +=1){
        soma = soma + arrayValores[indice];
    }
}

console.log(soma);

//exercicio1
const balance = 100;
function sumBalance(value) {
    return value + balance;
}
function subBalance(value) {
    return value - balance;
}
function multBalance(value) {
    return value * balance;
}
function divBalance(value) {
    return value / balance;
}
console.log(sumBalance(8)); 
console.log(subBalance(13)); 
console.log(multBalance(14)); 
console.log(divBalance(7)); 

//exercicio2
const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];
const nomesClientes = ['carol', 'thalles', 'murilo', 'irving', 'jhosué', 'tati'];

function greetCustomer(customer) {
  for (let index = 0; index < customer.length; index += 1) {
    console.log(`Ola, ${customer[index]}. Essa é sua conta do TrybeBank.`);
  }
};
greetCustomer(trybeBankCustomers);

function findElement(array, element){
    return array.includes(element);
}

console.log(findElement(trybeBankCustomers, 'Gus'));
console.log(findElement(nomesClientes, 'carol'));

//exercicio3
const clientesTrybe = ['Oliva', 'Nat', 'Gus'];

function addCustomer(cliente) {
    if (typeof cliente != 'string'){
        return 'O parâmetro passado deve ser do tipo string!';
    }
    clientesTrybe.push(cliente)
    return 'cliente adicionado ao fim da lista'
}
console.log(addCustomer('claudiomar'))
console.log(clientesTrybe);

//exercicio4
const clientesTrybers = ['Oliva', 'Nat', 'Gus'];

function addCustomers(clientesT, novosClientesT) {
    for (let index = 0; index < novosClientesT.length; index += 1) {
        if (typeof novosClientesT[index] === 'string') {
            clientesT.push(novosClientesT[index]);

        } else {
        return 'Todos os valores precisam ser strings.';
        }
    }
    return clientesTrybers;
};

console.log(addCustomers(clientesTrybers, ['claudiomar', 'matheus', 'gabriel']));

//exercicio5
