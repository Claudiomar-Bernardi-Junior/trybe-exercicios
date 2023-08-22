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
