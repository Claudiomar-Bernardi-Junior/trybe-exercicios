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

const residents = [
    {
      name: 'Luíza',
      lastName: 'Guimarães',
      floor: 10,
      apartment: 1005,
    },
    {
      name: 'William',
      lastName: 'Albuquerque',
      floor: 5,
      apartment: 502,
    },
    {
      name: 'Murilo',
      lastName: 'Ferraz',
      floor: 8,
      apartment: 804,
    },
    {
      name: 'Zoey',
      lastName: 'Brooks',
      floor: 1,
      apartment: 101,
    },
  ];

  for (let index = 0; index < residents.length; index += 1) {
    const resident = residents[index];
    console.log(resident);
  };

//exercicio1

const player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3},
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};

let message = `A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade.`;
console.log(message);

let achievements = `A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player['bestInTheWorld'].length} vezes`;

console.log(achievements);

//exercicio2
const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Software Engineer',
};
  
// Criação da função:
//como queremos adicionar uma infomação nova a logica da nossa função é que caso o titulo (key) que vamos colocar já exista, ele não sera indefinido (undefined)
//e com isso ele vai adicionar ela junto com o valor (value) que atribuimos a ele
const addProperty = (object, key, value) => {
    if (typeof object[key] === "undefined"){
    object[key] = value;
    }
};

// Chamada da função passando os valores dos parâmetros
addProperty(customer, 'birthPlace', 'Joinville');
addProperty(customer, 'birthDate', '19/07/1932');
addProperty(customer, 'maritalStatus', 'viuvo');

// Exibe o obejto e se deu certo ele vai exibir ao fim dele o que adicionamos 
console.log(customer);

console.log(Object.entries(customer));

//exercicio3

const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
      {
        title: 'O Senhor dos Anéis - a Sociedade do Anel',
        author: 'J. R. R. Tolkien',
        publisher: 'Martins Fontes',
      },
    ],
};

let frase = `O livro favorito de ${reader.name} ${reader.lastName} se chama ${reader.favoriteBooks[0].title}.`;


reader.favoriteBooks.push(
    {
        title: 'Harry Potter e o Prisioneiro de Azkaban',
        author: 'JK Rowling',
        publisher: 'Rocco',
    },
)
console.log(reader);
console.log(frase);

let quantidadeLivros = reader.favoriteBooks.length;
if (quantidadeLivros > 1){
    mensagemLivros = `${reader.name} tem ${reader.favoriteBooks.length} livros favoritos`
}else{
    mensagemLivros = `${reader.name} tem ${reader.favoriteBooks.length} livro favorito`
}

console.log(mensagemLivros);
// const numFavoriteBooks = reader.favoriteBooks.length;

// numFavoriteBooks > 1 
//   ? console.log(`${reader.name} tem ${numFavoriteBooks} livros favoritos.`) 
//   : console.log(`${reader.name} tem ${numFavoriteBooks} livro favorito.`);
//exercicio4

const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
};
const customerInfo = (fullOrder) => {
    const deliveryPerson = fullOrder.order.delivery.deliveryPerson;
    const name = fullOrder.name;
    const phoneNumber = fullOrder.phoneNumber;
    const street = fullOrder.address.street;
    const number = fullOrder.address.number;
    const apartment = fullOrder.address.apartment;

    return `Olá, ${deliveryPerson}, entrega para: ${name}, telefone: ${phoneNumber}, ${street}, numero: ${number}, AP: ${apartment}.`
}
  
console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
    fullOrder.name = 'Luiz Silva';
    fullOrder.payment.total = 50;

    const pizzas= Object.keys(fullOrder.order.pizza).join(', ');

    return `Olá, ${fullOrder.name}, o valor total de seu pedido de ${pizzas} e ${fullOrder.order.drinks.coke.type} é R$${fullOrder.payment.total},00.`;
}

console.log(orderModifier(order));

//exercicio4
const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
};

const valorChave = (obj, index) => Object.values(obj)[index];
console.log(valorChave(school, 0));

let totalEstudantes = 0;

for (let index = 0; index < school.lessons.length; index += 1) {
    totalEstudantes = totalEstudantes + school.lessons[index].students;
}

console.log(totalEstudantes);

const chavesrepetidas = (obj, key) => {
    for (let index = 0; index < school.lessons.length; index += 1) {
      if (school.lessons[index][key] === undefined) {
        return false;
      }
    }
    return true;
}
  
console.log(chavesrepetidas(school, 'course'));


const changeKey = (obj, course, value) => {
let findCourse;

for (let index = 0; index < obj.lessons.length; index += 1) {
  let element = obj.lessons[index];
  if (element.course === course) {
    findCourse = element;
    break;
    }
}

if (findCourse !== undefined) {
    findCourse.shift = value;
    return findCourse;
    } else {
  return 'Curso não encontrado.';
    }
};
  
console.log(changeKey(school, 'Python', 'Noite'));

  //exercicio5
