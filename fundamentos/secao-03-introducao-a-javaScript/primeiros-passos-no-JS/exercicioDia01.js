const myName = 'Claudiomar';
const birthCity = 'Joinville';
const birthYear = 1999;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

const base = 5;
const height = 8;
const area = base * height;
const perimeter = 5 + 5 +8 + 8;

console.log(base);
console.log(height);
console.log(area);
console.log(perimeter);

const age = 8;

if (age >= 18) {
  console.log('Maior de idade');
} else {
  console.log('Menor de idade');
}

// A sintaxe basica do operador ternario é: 
// CONDIÇÃO (Variavel, nome da variavel, valor e comando) 
// ? (usado para fazer a pergunta), 
// RESULTADO POSITIVO (resposta que vai ser passado caso seja verdadeiro) 
// : (usado para representar o "else"), 
// RESULTADO NEGATIVO (resposata que vai ser passada caso seja falso)

const personAge = 17;

const canVote = personAge >= 16 ? 'Pode votar!' : 'Não pode votar!';

console.log(canVote); // Pode votar!

let temperatuta = 150;
let tempo = temperatuta > 25 && 'tá quente!';

console.log(`a temperatura é ${temperatuta}, portanto ${tempo}`);

let grade = 88;

if (grade >= 80) {
    message1 = '“Parabéns, você faz parte do grupo de pessoas aprovadas!”';
} else if (grade < 80 && grade >= 60) {
    message1 = '“Você está na nossa lista de espera.”';
} else{
    message1 = '“Infelizmente, você reprovou.”';
}

console.log(message1)

let currentHour = 8;
let message2;

if (currentHour >= 22){
    message2 = 'Não deveríamos comer nada, é hora de dormir';
}else if (currentHour >= 18 && currentHour <= 22){
    message2 = 'Rango da noite, vamos jantar :D';
}else if (currentHour >= 14 && currentHour <= 18){
    message2 = 'Vamos fazer um bolo pro café da tarde?';
}else if (currentHour >= 11 && currentHour <= 14){
    message2 = 'Hora do almoço!!!';
}else if (currentHour >= 4 && currentHour <= 11){
    message2 = 'Hmmm, cheiro de café recém-passado';
}else{
    message2 = 'o que estou fazendo da minha vida ? a mimir';
}

console.log(message2) 

//aula 1

// qual tipo de variável
// nome da variável
// o conteúdo

//lev vs const vs var
// let = pode alterar conteudo
// const = não pode alterar conteudo
let meuNome ='claudiomar';
console.log(meuNome)

const devedor = 'Thalles'

//números
let idadeEnza = 27;

//operações
let saldoDevedor = 10 + 15 + 54 +1;
console.log(saldoDevedor)

// "=" é se é equivalente, "==" é se a informação é igual, 
// "===" se é extritamente igual, seja em informação seja em tipo
// typeof mostra o tipo da string
let resultado1 = 1 == '1';
console.log(typeof 1)
console.log(resultado1)

// operações
let jogador1 = 20
let jogador2 = 20
let resultado2;

//"SE" jogador 1 estiver mais a frente que jogador 2, ele ganha
// "SE" não, ele perde
// Se tiver igual é empate

if (jogador1 > jogador2){
    resultado2 = 'jogador1 venceu';
}else if (jogador1 === jogador2){
    resultado2 = 'Empate'
}else{
    resultado2 = 'Jogador 2 venceu'
}
console.log(resultado2)

let idadeBebe = 8;
let fralda;

if(idadeBebe <= 4){
    fralda = 'Vai utilizar a fralda: RN';
}else if (idadeBebe > 4 && idadeBebe <= 6){
    fralda = 'Vai utilizar a Fralda: RN+';
}else if (idadeBebe > 6 && idadeBebe <= 8){
    fralda = 'Vai utilizar a Fralda: P+';
}else if (idadeBebe > 8 && idadeBebe <= 10){
    fralda = 'Vai utilizar a Fralda: M+';
}else if (idadeBebe > 10 && idadeBebe <= 12){
    fralda = 'Vai utilizar a Fralda: G+';
}else{
    fralda = 'não é a mamãe';
}
console.log(fralda);
//variaveis a serem usadas nos exercicios
const num1 = 8;
const num2 = 13;
const num3 = 14;


//Exercicio 1
console.log('Operação de Soma: ' + (num1 + num2));
console.log('Operação de Subtração: ' + (num1 - num2));
console.log('Operação de Multiplicação: ' + (num1 * num2));
console.log('operação de Divisão: ' + (num1 / num2));
console.log('operação de Módulo: ' + (num1 % num2));

//exercicio 2
if (num1 > num2){
    console.log(num1 + ' é maior que ' + num2);
}else if (num1 === num2){
    console.log(num1 + ' é igual a ' + num2);
}else {
    console.log(num1 + ' é menor que ' + num2);
}

//exercicio 3
if (num1 > num2 && num1 > num3){
    console.log(num1 + ' é maior que ' + num2 + ' e ' + num3);
}else if (num2 > num1 && num2 > num3){
    console.log(num2 + ' é maior que ' + num1 + ' e ' + num3);
}else if (num3 > num1 && num3 > num2){
    console.log(num3 + ' é maior que ' + num1 + ' e ' + num2);
}else {
    console.log('todos os numeros são iguais');
}

//exercicio 4
const angulo1 = 60;
const angulo2 = 60;
const angulo3 = 60;

if (angulo1 + angulo2 + angulo3 === 180){
    console.log('True: É um triangulo valido')
}else if (angulo1 + angulo2 + angulo3 != 18){
    console.log('False: Não é um triangulo valido')
}

//exercicio5
const peca = 'ju';

switch (peca.toLowerCase()) {
    case 'rei':
    console.log('Rei é uma peça que anda 1 quadrado em qualquer direção.');
    break;
    case 'rainha':
    console.log('Rainha é uma peça que anda quantos quadrados quiser em qualquer direção entre Diagonal, horizontal e vertical.');
    break;
    case 'bispo':
    console.log('Bispo é uma peça que anda quantos quadrados quiser, mas apenas em diagonal.');
    break;
    case 'cavalo':
    console.log('Cavalo é uma peça que anda 3 quadrados retos em qualquer direção e no ultimo quadrado do movimento ela vai 1 para o lado, é a unica peça que pode pular sobre outras, comendo apenas a peça que estiver no fim de seu movimento.');
    break;
    case 'torre':
    console.log('Torre é uma peça que anda quantos quadrados quiser, mas apenas na Horizontal e vertical.');
    break;
    case 'peão':
    console.log("Peão é uma peça que anda 1 quadrado para frente apenas e na primeira vez que ela movimentar ela pode andar 2 quadrados para frente. Seu ataque é feito em diagonal, mas apenas em frente, nunca nas diagonais traseiras do movimento dela.");
    break;
    default:
    console.log('Peça não encontrada');
};
//obs: lembresse, o movimendo o switch case é em cascata, logo, 
//ele vai avaliar de cima para baixo as respostas até encontrar uma que se encaixe melhor no que foi pedido

//exercicio6
let Par = false;

if(num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
    Par = true;
}

console.log(Par)

//exercicio7

const salarioBruto = 2600;
let descontoINSS
let descontoIR

if (salarioBruto <= 1556.94){
    descontoINSS =(salarioBruto * 8) / 100;
}else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    descontoINSS = (salarioBruto * 9) / 100;
}else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    descontoINSS = (salarioBruto * 11) / 100;
}else if (salarioBruto > 5189.82){
    descontoINSS = 570.88;
}
console.log(descontoINSS)

const salariodescontoINSS = salarioBruto - descontoINSS

if (salarioBruto - descontoINSS <= 1903.98){
    descontoIR = 0;
}else if (salariodescontoINSS >= 1903.99 && salariodescontoINSS <= 2826.65){
    descontoIR = (salariodescontoINSS * 7.5) / 100 - 142.80;
}else if (salariodescontoINSS >= 2826.66 && salariodescontoINSS <= 3751.05){
    descontoIR = (salariodescontoINSS * 7.5) / 100 - 354.80;
}else if (salariodescontoINSS >= 3751.06 && salariodescontoINSS <= 4664.68){
    descontoIR = (salariodescontoINSS * 7.5) / 100 - 636.13;
}else if (salariodescontoINSS > 4664.68){
    descontoIR = (salariodescontoINSS * 7.5) / 100 - 869.36;
}

console.log(descontoIR)

const salarioLiquido = salarioBruto - descontoINSS - descontoIR

console.log(salarioLiquido)
