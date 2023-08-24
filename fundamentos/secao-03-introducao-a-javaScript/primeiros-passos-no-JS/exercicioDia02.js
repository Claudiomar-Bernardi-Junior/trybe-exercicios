//aula 2 
//variaveis são gavetas que contem apenas uma informçaão enquanto arrays são como armarios que contem varias gavetas, 
//logo mais variaveis, podendo ser de tipos diferentes
let nome = 'carol';

//arrays começam pelo numero 0 na lista
let nomes = ['carol', 'thalles', 'murilo', 'irving', 'jhosué', 'tati'];
console.log(nomes[0])
console.log(nomes[1])
console.log(nomes[2])
console.log(nomes[3])
console.log(nomes[4])
console.log(nomes[5])
//6 elementos com indice de 0 a 5
console.log(nomes.length)

//forma de unir string com variavel
//forma 1: 'texto' + 2;
//forma 2: `texto aqui ${variavel aqui} pode continuar o texto`

console.log(`Ola ${nome}, tudo bem com você ?, seu saldo bancario é de ${20 - 10}`)

//For inicialização; Verificação; Atualização
//Inicialização: executar o codigo
//Verificação: console.log('hello world!');
//Vai para a atualização

for(let index1 = 0; index1 < 1; index1+=1){
    console.log(index1);
}

//Como fazer a verificação de um array (criando um array com verificação de outro Array)
let tamanhoArray = nomes.length;
let pessoasEspeciais = [];

for(let index = 0; index <= tamanhoArray; index+=1){
    let name = nomes[index];
    if(name === 'irving' || name === 'carol'){
        console.log(`Array primeiro: ${pessoasEspeciais}`);
        pessoasEspeciais.push(nomes[index]);
        console.log(pessoasEspeciais);
    }
}

//loop for
let horas = [
  1,  2,  3,  4,  5,  6,  7,  8,
  9, 10, 11, 12, 13, 14, 15, 16,
 17, 18, 19, 20, 21, 22, 23, 24,
]

let minutos = [
    1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 
   13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
   25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
   37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
   49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
]

for(let index = 0; index < horas.length; index+=1){
    const hora = horas[index];
    for(let index = 0; index < minutos.length; index+=1){
        const minuto = minutos[index];
        console.log(`agora são ${hora} Horas e ${minuto} minutos`);
    }
}

//mundo real
//nomes iguais entre dois Arrays
let nomesIguais = [];
let primeirosNomes = ['claudiomar', 'angelica', 'adilson'];
let segundosNomes = ['claudiomar', 'Gabriel', 'matheus', 'claudia'];

for (let index = 0; index <segundosNomes.length; index +=1){
    let segundos = segundosNomes[index];
    for (let indexprimeirosNomes = 0; indexprimeirosNomes < primeirosNomes.length; indexprimeirosNomes +=1){
    let primeiros = primeirosNomes[indexprimeirosNomes];
        if (segundos === primeiros){
            nomesIguais.push(primeiros)
        }

    }
}
console.log(nomesIguais);

//variaveis a serem usadas nos exercicios
