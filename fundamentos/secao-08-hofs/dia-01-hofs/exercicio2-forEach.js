const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const expectedResult = 'Duna';
const smallerName = () => {
  let nameBook;
  // namebook inicia como undefined
books.forEach((book) => {
  // ao iterar a primeira vez, a nameBook está vazia (false), ao pedir a negação ela se torna true (!nameBook = true), logo se ele estiver vazio, vou guardar o primeiro nome que aparecer na iteração
if (!nameBook || book.name.length < nameBook.length) {
  console.log(`Esse é o nome do livro iterado: ${book.name}`);
  nameBook = book['name']
  console.log(`Esse é o nome do livro guardado na variável ${nameBook}`);
}
})

  return nameBook;
}

console.log(smallerName());




// Outra forma de resolver
// const expectedResult2 = "Duna";
// const smallerName = () => {
//   let nameBook = books.find((book) => true).name;
//   books.forEach((book) => { 
//     if (book.name.length < nameBook.length) {
//       nameBook = book.name;
//     }
//   }); 
  
  
//   // Variável nameBook que receberá o valor do menor nome;
//   return nameBook;
// };
// console.log(smallerName());