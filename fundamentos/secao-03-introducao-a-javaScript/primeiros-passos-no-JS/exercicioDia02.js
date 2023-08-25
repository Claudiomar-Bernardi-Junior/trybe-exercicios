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
//1- Pegar um copo;
//2- Colocar o copo em cima da mesa;
//3- Abrir a porta da geladeira;
//4- Pegar o leite;
//5- Fechar a porta da geladeira;
//6- Colocar determinada quantidade de leite no copo;
//7- Abrir o armário;
//8- Pegar o achocolatado;
//9- Fechar a porta do armário;
//10- Colocar determinada quantidade de achocolatado no copo;
//11- Pegar uma colher;
//12- Mexer no copo com a colher;
//13- Beber o leite com achocolatado 🥛.

/*let claudiomar
claudiomar.abrirPrateleira();
if(copo.length >= 1){
claudiomar.pegarCopo(1 + ' copo de até 300ml')
}
claudiomar.fecharPrateleira();
claudiomar.colocarCopoMesa();
Claudiomar.abrirPortaGeladeira();
if(leite.length >= 1){
    claudiomar.pegarleite(1 + ' caixa ou pacote de leite de até 1 litro');
}
let copo = 0;
let leite = 1000;
Claudiomar.fecharPortaGeladeira();
claudiomar.leiteNoCopo()
do {
    copo += 1;
    console.log (copo)
}while (copo < 149)
claudiomar.abrirPortaArmario();
if(achocolatado.length >= 1){
    claudiomar.pegarAchocolatado(1 + ' pacato ou lata de achocolatado em pó');
}
Claudiomar.fecharPortaArmario();
let poAchocolatado = 750;
do {
    copo += 1;
    console.log (copo)
}while (copo < 189)
claudiomar.pegarColher()
claudiomar.mexerCopoColher()
claudiomar.beberCopo();*/

const produto = 'Iphone 32'
const preco = 58000;
const disconto = 10;

const menssagem = 
`Produto: ${produto}
Preço: ${preco}
Desconto: ${disconto}%
Preço com desconto: R$${(preco - (preco * (disconto /100))).toFixed(2)}`;

console.log(menssagem)

//Arrays

const listaCompras = ['Arroz', 'Batata', 'Leite Ninho', 'Sucrilhos'];

console.log(listaCompras.length)
console.log(listaCompras[0])

//pegar o ultimo elemento de uma lista usando apenas uma linha de codigo
console.log(listaCompras[listaCompras.length - 1])

//adicionar itens no seu array
listaCompras.push('Estilete');//ultimo item
listaCompras.unshift('Milho');//primeiro item

//remover itens do seu array
listaCompras.push('Cotonetes');
listaCompras.unshift('Água de Coco');
listaCompras.pop();//ultimo item
listaCompras.shift();//primeiro item
console.log(listaCompras)

//estrutura de repetição FOR

const numbers = [2, 19, 23, 4, 8, 10];
let sum = 0;

// Loop for, que irá iterar da posição 0 até o último elemento do array
// A variável sum sempre irá receber o valor atual dela + o número do array
for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
};

console.log(sum);

//exercicio1 e 2
const menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
const menuServices = menu[1];
menu.push('Contato');
console.log(menu);
console.log(menuServices);
for(let index = 0; index < menu.length; index += 1){
    console.log(menu[index])
}

//exercicio3
let numerosNovos = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let index = 0; index < numerosNovos.length; index += 1){
    let numerosMomento = numerosNovos[index];
    console.log(numerosMomento);
}

//exercicio4
let somarTodos = 0;
for (let index = 0; index < numerosNovos.length; index += 1) {
    somarTodos += numerosNovos[index];
  };
console.log(somarTodos);

//exercicio5
let mediaTodos = 0;
for (let index = 0; index < numerosNovos.length; index += 1) {
    mediaTodos += (numerosNovos[index] / numerosNovos.length);
};
console.log(mediaTodos);

//exercicio6
if (mediaTodos > 20) {
    message1 = 'O valor da média aritmética é maior que 20';
} else{
    message1 = 'O valor da média aritmética é menor ou igual a 20';
}
console.log(message1)

//exercicio7
//primeiro criamos uma nova variavel que vai ser a representação do maior numero, e atrelamos a ela um dos nosso numeros, de preferencia o primeiro numeor de nosso array
//após isso seguimos o For normal para ele fazer a verificação de nosso array principal, porem adicionamos uma regra com o IF que vai ser como ele vai selecionar o maior numero
//a regra consiste em compara o numero atual que demos para ele inicialmente com o proximo numero que vai ser verificado e caso o numero verificado seja maior, então ele vai substituir o antigo por ele
//após isso ele vai voltar a verificar os proximos numeros e enquanto não encontrar um maior, ele vai ser aquele numero que ficou.
let maiorNumero = numerosNovos[0];
for(let index = 1; index < numerosNovos.length; index += 1){
    if(numerosNovos[index] > maiorNumero){
        maiorNumero = numerosNovos[index];
    }
}
console.log(maiorNumero)

//exercicio8
let impar = 0;
for(let index = 0; index < numerosNovos.length; index += 1){
    if(numerosNovos[index] % 2 !==0){
        impar +=  1;
    }
};

if(impar === 0){
    console.log('Nenhum valor ímpar encontrado')
}else{
    console.log(impar);
}

//exercicio9
//usando o modo de decremento do index, podemos fazer ele retroceder de 10 até 1.
//primeiro ligamos a variavel que vai conter o valor final como resultado 1, e então fazemos o FOR começar pelo 10 e então multiplicar ele pela variavel que criamos
//ele vai repetir isso enquanto o index dele não atingir a posição 0, e atualizamos ele para descer de 1 em 1 com o decrimento
//após isso substituimos o calculo que usamos é para que o resultado obtido dessa multiplicação substitua o valor da variavel incial, e após isso ele vai para o proximo loop
// ele vai continuar isso enquanto o valor do index dele não atingir o 0 e com isso ele nunca vai multiplicar o valor final por 0.
let fatorial = 1;
for (let index = 10; index > 0; index -= 1){
    fatorial *= index;
}
console.log(fatorial)

//exercicio10 inverter codigos

let palavras = 'tryber de plantão';
let palavrasReversas = '';
//Split faz a separação de elementos, se não for expecificado o que é para ser separado, ela considera cada caractere como um elemento individual
//caso você queira separa uma palavra expecifica primeiro você cria a regra com '' e um espaço entre elas "variavel nome = variavelASeparar.split(' ');"
//após isso só chamar o console.log com o index da palavra ligado a variacvelASeparar e pronto.
//se você não deixar o espaço ela vai pegar o proprio caractere (que é o que vou utilizar nesse exercicio), e se vc não usar nada, ela vai pegar a frase inteira.

//Já o reverse é mais alto explicativo, ele vai inverter todos os elementos da sua string, ou seja, o que antes era o primeiro, vira o ultimo.
//o que era o ultimo, agora é o novo primeiro, e assim por diante.
//como eu separei cada caractere com o SPLIT, logo ele vai reverter cada caractere da string como elemento individual, isso é o que troca as letras de lugar

//e por fim o JOIN que é o que vai juntar tudo e deixar a frase mais bonita.
//assim como o Split ele tem umas regrinhas, exemplo: "variavel nome = Elementos da variavel;"
//após isso ai chamar o console.log você adicionar entre parentezes (nome.Join()); e dentro dos parentezes do Join que você coloca a regra.
//caso você não coloque nada, ele vai apenas tirar os espaços que separariam os seus elementos, deixando as virgulas ainda presentes.
// se você fizer ('') ele vai tirar as virgulas, e caso você adicione algo entre as aspas ele vai adicionar também usando para separar os elementos.
//no nosso caso eu apenas pedi para ele remover qualquer coisa que separaria os caracteres que eu mesmo já não tenha expecificado na string. 
palavrasReversas = palavras.split('').reverse().join('');
console.log(palavrasReversas);

//exercicio 11 e 12 (asteristicos)
//primeiro fazemos ele juntar '*' até que tenha um total de 5 '*'
//após isso só pedimos para ele me imprimir esse mesmo resultado 5 vezes.
let simbolo = '*';
let simboloN = '';

for(index = 0; index < 5; index += 1){
    simboloN = simboloN + simbolo
}
for(let index = 0; index < 5; index +=1){
    console.log(simboloN);
}
//a diferença desse para o anterior é porque os dois FOR foram feitos em apenas um, logo para cada loop ele vai imprimri o valor no log.
//enquanto isso no que esta separado, ele vai ter apenas um unico resultado final e só depois ele vai imprimir esse mesmo resultado 5 vezes.
let simboloPiramide = '';
for(let index = 0; index < 5; index += 1) {
    simboloPiramide = simboloPiramide + simbolo
    console.log(simboloPiramide);
}

//exercicio 13 (asteriscos só que do fim para o inicio)
//como sempre definimos uma nova variavel que vai ser impressa no console.log, porem dessa vez precisamos fazer um outro calculo separado com uma outra variavel
//esse outro calculo vai definir quantos espaços e quantos astericos vamos adicionar na nova variavel que vai estar "invertida".
//o calculo dele diz que enquanto o endereço do index que estiver sendo loopado for menor que a posição inicial que atribuimos com a outra variavel, ele vai adicionar espaços a string
//mas quando o enreço do index for maior ou igual a posição, ele vai adicionar um asterisco.
//com isso ele vai seguir loopando até fechar todas as verificações dando o resultado que queremos.
let linha = '';
let posicao = 5 - 1;

for (let index = 0; index < 5; index += 1) {
  for (let index = 0; index < 5; index += 1) {
    if (index < posicao) {
        linha = linha + ' ';
    } else {
        linha = linha + simbolo;
    }
  }
  console.log(linha);
  linha = '';
  posicao -= 1;
};


