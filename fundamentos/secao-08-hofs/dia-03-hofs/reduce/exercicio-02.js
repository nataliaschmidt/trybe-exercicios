// Calcule a área total de todos os países.

const countries = require('./data');

const calcArea = () => countries.reduce((acc, area) => acc + area.area, 0);

console.log(calcArea());