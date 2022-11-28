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
// let higherNumber = numbers[0];
// for (let i = 1; i < numbers.length; i += 1){ //começa na posição de index 1 pois a posição 0 já é meu menor elemento
// if (numbers[i] > higherNumber){
//     higherNumber = numbers[i]
// }
// }
// console.log(higherNumber); //console log fora do escopo para me entregar somente o número final

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

// let odd=0;
// for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] % 2 != 0){
//         console.log(`Número ímpar encontrado na array ${numbers[i]}`);
//         odd += 1
//         console.log(`Soma de quantos nº ímpares ${odd}`);
//     } }

//     if (odd ===0){
//         console.log(`Não há números ímpares no array`);
//     } else {
//         console.log(`Existem no total ${odd} números ímpares no array`);
//     }


//Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let lowerValue = numbers[0];
for (let i = 0; i < numbers.length; i += 1){
    if (lowerValue > numbers[i]){
        lowerValue = numbers[i]
        console.log(lowerValue)
    }
}
console.log(`O menor número do array é ${lowerValue}`);