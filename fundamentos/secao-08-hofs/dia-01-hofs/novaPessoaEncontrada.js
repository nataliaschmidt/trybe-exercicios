
const makeEmail = (fullName) => {
  const email = fullName.toLowerCase().replace(' ', '_')
  // const email = fullName.toLowerCase().split(' ').join('_')
return {
  fullName: fullName,
 email: `${email}@trybe.com`
}
}

console.log(makeEmail('Natalia Schmidt'));



const newEmployees = (makeEmail) => {
  const employees = {
    id1: makeEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: makeEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: makeEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(makeEmail));