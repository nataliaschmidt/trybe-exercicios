const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const BookControler = require('./controller/BookControler')

app.use(express.json());

app.get('/books', BookControler.getAll)
app.get('/books/:id', BookControler.findById)
app.post('/books', BookControler.create)
app.put('/books/:id', BookControler.update)
app.delete('/books/:id', BookControler.remove)
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));