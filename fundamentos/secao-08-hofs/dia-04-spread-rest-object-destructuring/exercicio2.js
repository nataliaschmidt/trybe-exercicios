
const sum = (...number) => number.reduce((acc, cur) => acc + cur, 0)

console.log(sum(4,5,6));