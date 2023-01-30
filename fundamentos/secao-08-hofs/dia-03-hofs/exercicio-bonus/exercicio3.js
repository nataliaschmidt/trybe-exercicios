const books = require('./dados');

const average = () => {
  const sum = books.reduce((acc, valor) => {
return acc += (valor.releaseYear - valor.author.birthYear)
  }, 0)
  return sum / books.length;
}

console.log(average());