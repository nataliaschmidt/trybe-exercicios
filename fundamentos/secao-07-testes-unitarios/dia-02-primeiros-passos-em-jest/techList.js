const techList = (array, name) => {
if (array.length === 0) return 'Vazio!'

const sortArray = array.sort();
const techList = [];

for (let index = 0; index < sortArray.length; index += 1) {
  techList.push({
    tech: sortArray[index],
    name,
  });
}
return techList
}

module.exports = techList;