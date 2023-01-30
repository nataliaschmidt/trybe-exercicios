
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
// yearSeasons: estações do ano.


const {spring, summer, autumn, winter} = yearSeasons;

console.log(spring);
console.log(summer);
console.log(autumn);
console.log(winter);

const months = [...summer, ...autumn, ...winter, ...spring]
console.log(months);
