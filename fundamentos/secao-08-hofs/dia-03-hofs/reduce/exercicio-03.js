const countries = require('./data');

// Encontre o país com o maior nome.


const longestName = () => countries.reduce((acc, curr) => acc.name.length > curr.name.length ? acc : curr);

console.log(longestName());