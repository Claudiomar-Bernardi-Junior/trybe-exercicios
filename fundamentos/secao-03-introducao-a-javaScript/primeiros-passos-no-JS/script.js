const meuArrayNomes = ['enza', 'rafael', 'joi']; // uma coleção do mesmo tipo (string)
const meuArrayIdades = [25, 31, 17]; // uma coleção do mesmo tipo(numeros)

//[] = colchetes = array
//{} = chaves = objetos
// JSON = API
const pessoa1 = {
    nome: 'enza',
    idade: 25,

};

// Acessar uma chave: 
//Utilizando ". = objeto.chave" (a mais utilizada)
console.log(pessoa1.idade)

//Utilizando "[] = objeto['chave']" (a segunda mais utilizada)
console.log(pessoa1['idade']);

//Utilizando variavel para acessar a chave (possivel utilizar, mas tem meios mais simples)
// []= objeto[chave]"

const chave = 'idade';
console.log(pessoa1[chave])

// Alterando o valor de uma chave
pessoa1.idade =30;
console.log(pessoa1.idade);

// adicionar uma nova chave e valor em um objeto

pessoa1.hobbies = ['natação', 'jogar', 'lutar'];
pessoa1.hobbies.push('comer')
console.log(pessoa1);

// os 3 principais metodos para Objetos
// metodo para ver as chaves (Fazendo o retorno das keys)
// metodo para ver os valores (Fazendo o retorno dos values)
// metodo para ver as entradas (Fazendo o retorno das entries)

console.log(Object.keys(pessoa1));
console.log(Object.values(pessoa1));
console.log(Object.entries(pessoa1));



