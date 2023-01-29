const books = require('./dados')

// Crie um array que possua apenas os nomes de todas as pessoas autoras de ficção científica ou fantasia e ordene por ordem alfabética.

const filterBook = () => {
  return books.filter((book)=>{
return book.genre === 'Fantasia' || book.genre === 'Ficção Científica'
  })
}




const fantasyOrScienceFictionAuthors = () => {
const booksFiltered = filterBook();

const names = booksFiltered.map((element)=> element.author.name)
return names.sort((nameA, nameB) => nameA.localeCompare(nameB))
}

console.log(fantasyOrScienceFictionAuthors());