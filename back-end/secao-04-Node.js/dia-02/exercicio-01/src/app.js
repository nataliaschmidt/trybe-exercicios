const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const moviesPath = path.resolve(__dirname, './movies.json');

const app = express();
app.use(express.json());

// Função para ler o arquivo
const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pode ser lido: ${error}`);
  }
};

// Endpoint que possa listar todos os filmes do JSON
// A rota deve receber a informação por query e a chave deve-se chamar q. A chave vai trazer consigo valor de ‘gente’ por exemplo, e o filtro deve trazer apenas os filmes com esse termo, se não encontrar, traga um array vazio.
app.get('/movies/search', async (req, res) => {
try {
  const { q } = req.query;
  // http://localhost:3001/movies/search?q=gente
  // console.log(q);
  const movies = await readFile();
  if (q) {
    const regex = new RegExp(q, 'i');
    const filteredMovies = movies.filter((element) => regex.test(element.movie));
    // console.log(regex);
    return res.status(200).json(filteredMovies);
  }
  res.status(200).end();
} catch (error) {
  res.status(500).send({ message: error.message });
}
});

// Endpoint para listar todos os filmes
app.get('/movies', async (req, res) => {
  try {
    const movies = await readFile();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Enpoint para listar um filme do JSON por id
app.get('/movies/:id', async (req, res) => {
  try {
    const movies = await readFile();
    const movie = movies.find(({ id }) => id === Number(req.params.id));
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Endpoint para cadastrar um novo filme no arquivo JSON
app.post('/movies', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const movies = await readFile();
    const newMovie = {
      id: movies[movies.length - 1].id + 1,
      movie,
      price,
    };
    const allMovies = JSON.stringify([...movies, newMovie]);
    await fs.writeFile(moviesPath, allMovies);
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Endpoint para editar as informações de um filme do JSON
app.put('/movies/:id', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const { id } = req.params;
    const movies = await readFile();
    const index = movies.findIndex((e) => e.id === Number(id));
    movies[index] = {
      id: Number(id),
      movie,
      price,
    };
    const updatedMovies = JSON.stringify(movies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);
    res.status(200).json(movies[index]);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Endpoint para deletar um filme do JSON.
app.delete('/movies/:id', async (req, res) => {
try {
  const { id } = req.params;
  const movies = await readFile();
  const filteredMovies = movies.filter((movie) => movie.id !== Number(id));
  const updatedMovies = JSON.stringify(filteredMovies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);
    res.status(204).end();
} catch (error) {
  res.status(500).send({ message: error.message });
}
});

module.exports = app;