//Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
//Bonus: use somente um if.

const number01 = 5;
const number02 = 3;
const number03 = 15;

if (number01 % 2 === 0 || number02 % 2 === 0 || number03 % 2 === 0){
    return console.log('true');
} else {
    return console.log('false');
}