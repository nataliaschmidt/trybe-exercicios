let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
// for (let i = 0; i < numbers.length; i += 1){
//     console.log(numbers[i]);
// }

// Some todos os valores contidos no array e imprima o resultado;
// let sum = 0;
// for (let i = 0; i < numbers.length; i += 1){
// sum += numbers[i];
// console.log(sum);
// }

//Calcule e imprima a média aritmética dos valores contidos no array;
let sum = 0;
let average = 0;

for (let i = 0; i < numbers.length; i += 1){
sum += numbers[i];
}
average = sum/numbers.length;
console.log(average);