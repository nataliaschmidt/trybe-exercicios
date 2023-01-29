const books = require('./dados')

// Faça uma função que retorne os nomes dos livros, dado o ano de nascimento das pessoas autoras.

const expectedResult = ['Fundação', 'Duna'];

const booksByAuthorBirthYear = (birthYear) => {
  const filterBooks = books.filter((book) => book.author.birthYear === birthYear)
  return filterBooks.map((filterBook)=> filterBook.name)
}
const result = booksByAuthorBirthYear(1920);

console.log(result);