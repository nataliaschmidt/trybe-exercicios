// Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let note = 70;

if (note >= 90){
    console.log('Conceito A');
}
else if (note >= 80){
    console.log('Conceito B');
}
else if (note >= 70){
    console.log('Conceito C');
}
else if (note >= 60){
    console.log('Conceito D');
}
else if (note >= 50){
    console.log('Conceito E');
}
else {
console.log('Conceio F');
}