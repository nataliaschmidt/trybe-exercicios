const countries = require('./data')

// Calcule a quantidade total da população de todos os países.

const expectedResult = 120797034;

const getPopulation = () => {
return countries.reduce((acc, pop)=> acc + pop.population, 0)
}

console.log(getPopulation());