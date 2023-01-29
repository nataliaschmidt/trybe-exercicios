const books = require('./dados')

// Filtre os livros com mais de 60 anos desde sua publicação e ordene a partir do livro mais velho para o mais novo.

const oldBooksOrdered = () => {
  const AtualYear = new Date().getFullYear();
  const booksMoreThan60Year = books.filter((book) => AtualYear - book.releaseYear > 60)
  return booksMoreThan60Year.sort((a, b)=> a.releaseYear - b.releaseYear)
}

console.log(oldBooksOrdered());