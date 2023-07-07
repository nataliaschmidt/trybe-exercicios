const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const findById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
}

const create = async ({title, author, pageQuantity}) => {
const createBook = await Book.create({title, author, pageQuantity});
return createBook;
};

const update = async (id, { title, author, pageQuantity }) => {
  const [updated] = await Book.update(
    {
      title,
      author,
      pageQuantity,
    },
    { where: { id } },
  );

  return updated;
};

const remove = async (id) => {
  const removed = await Book.destroy({where: {id}});
  return removed;
}

module.exports = {
  getAll,
  findById,
  create,
  update,
  remove,
};