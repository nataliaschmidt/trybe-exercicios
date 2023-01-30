const books = require('./dados');

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

const longestNamedBook = () => {
return books.reduce((acc, book) => {
return acc.name.length > book.name.length? acc : book
})
}

console.log(longestNamedBook());