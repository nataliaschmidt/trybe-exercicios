const { Book } = require('../models');
const { Op } = require('sequelize');

const getAll = async () => {
  const books = await Book.findAll({
    order:[['title', 'ASC']]
  });
  return books;
};

const findById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
}

const create = async ({title, author, pageQuantity, publisher}) => {
const createBook = await Book.create({title, author, pageQuantity, publisher});
return createBook;
};

const update = async (id, { title, author, pageQuantity, publisher }) => {
  const [updated] = await Book.update(
    {
      title,
      author,
      pageQuantity,
      publisher,
    },
    { where: { id } },
  );

  return updated;
};

const remove = async (id) => {
  const removed = await Book.destroy({where: {id}});
  return removed;
}

const getByAuthor = async (author) => {
  const books = await Book.findAll({
    where: { author: {[Op.like]: `%${author}%` }},
    order:[['title', 'ASC']]
  })

  return books
}

module.exports = {
  getAll,
  findById,
  create,
  update,
  remove,
  getByAuthor,
};