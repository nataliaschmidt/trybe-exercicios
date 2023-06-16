const validateDescription = (req, res, next) => {
const { description } = req.body;
const requiredPropertiesDescription = ['createdAt', 'rating', 'difficulty']

if (!description) {
  return res.status(400).json(
    { message: 'O campo description é obrigatório' },
  );
}

const hasPropertiesDescription = requiredPropertiesDescription.every(p => p in description);

if(!hasPropertiesDescription){
  return res.status(400).json(
    { message: 'O atributo é obrigatório'}
    )
}

return next();
}

module.exports = validateDescription;

// middlewares/validateDescription.js




// const validateDescription = (descriptionValue, res, value) => {
//   if (!descriptionValue) {
//     return res.status(400).json(
//       { message: `O campo ${value} é obrigatório` },
//     );
//   }
// };

// module.exports = (req, res, next) => {
//   const { description } = req.body;

//   return validateDescription(description, res, 'description')
//     || validateDescription(description.createdAt, res, 'createdAt')
//     || validateDescription(description.rating, res, 'rating')
//     || validateDescription(description.difficulty, res, 'difficulty')
//     || next();
// };