let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
// for (value of numbers){
//     console.log(value);
// }

// Some todos os valores contidos no array e imprima o resultado;
// let sum = 0;
// for (let i = 0; i < numbers.length; i += 1){
// sum += numbers[i];
// console.log(sum);
// }

//Calcule e imprima a média aritmética dos valores contidos no array;
// faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

// let sum = 0;
// let average = 0;

// for (let i = 0; i < numbers.length; i += 1){
// sum += numbers[i];
// }
// average = sum/numbers.length;
// if (average > 20){
//     console.log('valor maior que 20');
// } else {
//     console.log('valor menor do que 20');
// }

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let higherNumber = numbers[0];
for (value of numbers){
if (value > higherNumber){
    higherNumber = numbers[value]
    console.log(higherNumber);
}
}