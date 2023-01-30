const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// Dada uma matriz, transforme em um array
 
// método concat é usado para unir dois (ou mais) arrays.

const flatten = () => {
return arrays.reduce((acc, array) => {
return acc.concat(array)
}, [])
}

console.log(flatten());