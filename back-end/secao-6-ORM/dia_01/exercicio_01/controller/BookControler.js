const BookService = require('../services/BookService');

const getAll = async (_req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (error) {
    console.error(error.message);
  };
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.findById(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    return res.status(200).json(book);
  } catch (error) {
    console.error(error.message);
  };
}

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const createbook = await BookService.create({ title, author, pageQuantity });
    return res.status(201).json(createbook);
  } catch (error) {
    console.error(error.message);
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    // console.log(title, author, pageQuantity)
    const updateBook = await BookService.update(id, { title, author, pageQuantity });

    if (!updateBook) return res.status(404).json({ message: 'Book not found' });

    return res.status(201).json({ message: 'Book Updated' });
  } catch (error) {
    console.error(error.message);
  }
}

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const removed = await BookService.remove(id);

    if (!removed) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json({ message: 'Book removed' });
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = {
  getAll,
  findById,
  create,
  update,
  remove,
};