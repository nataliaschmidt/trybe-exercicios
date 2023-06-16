const express = require('express');
const validateName = require('./middleware/validateName');
const validatePrice = require('./middleware/validatePrice');
const validateDescription = require('./middleware/validateDescription');
const validateCreatedAt = require('./middleware/validateCreatedAt');
const validateRating = require('./middleware/validateRating');
const validateDifficulty = require('./middleware/validateDifficulty');
const generateToken = require('./utils/generateToken');
const auth = require('./middleware/auth');

const app = express();

app.use(express.json());

app.post('/activities', auth, validateName, validatePrice, validateDescription, validateCreatedAt, validateRating, validateDifficulty, (_req, res) => {
return res.status(201).json({ message: 'Atividade registrada com sucesso' })
})


app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }

  const token = generateToken();
  return res.status(200).json({ token });
});


module.exports = app;