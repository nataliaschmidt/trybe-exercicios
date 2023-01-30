const books = require('./dados');

const reduceNames = () => books
  .reduce((acc, book, index) => index === books.length - 1 ?
     `${acc}${book.author.name}.` :
     `${acc}${book.author.name}, `, '');

console.log(reduceNames());