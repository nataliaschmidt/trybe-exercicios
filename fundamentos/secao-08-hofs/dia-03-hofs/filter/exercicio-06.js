const books = require('./dados')

// Encontre o primeiro resultado cujo nome registrado começa com três iniciais e retorne o nome do livro.

const expectedResult = 'O Senhor dos Anéis';

const authorWith3DotsOnName = () => {
const filter = books
  .filter((book)=> book.author.name[1] === '.' && book.author.name[4] === '.' && book.author.name[7] === '.')

return filter.map((element)=> element.name)

}

  console.log(authorWith3DotsOnName());