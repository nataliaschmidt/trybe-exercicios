const BookModel = require('../../models/book');
const {sequelize, dataTypes, checkModelName, checkPropertyExists} = require('sequelize-test-helpers');

describe('O model de Book', function () {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  describe('possui o nome "Book"', () => {
    checkModelName(Book)('Book');
  });

  describe('possui as propriedades "title", "author", "pageQuantity" e "publisher"', () => {
    ['title', 'author', 'pageQuantity', 'publisher'].forEach(checkPropertyExists(book));
  });
})