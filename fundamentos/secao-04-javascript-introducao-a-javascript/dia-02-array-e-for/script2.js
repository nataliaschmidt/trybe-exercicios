//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let array = []
for (let i = 1; i <= 25; i+= 1){
    array.push(i)
}

console.log(array);

for (let i = 0; i < array.length; i += 1){
    console.log(`${array[i]} / 2 =` + array[i] / 2);
}