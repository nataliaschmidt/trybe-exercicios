const books = require('./dados')

// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

const atualYear = new Date().getFullYear();

const oldBooks = () => {
 const filterBooks = books.filter((book)=> atualYear - book.releaseYear > 60)
 return filterBooks.map((filterBook)=> filterBook.name)
}

console.log(oldBooks());
