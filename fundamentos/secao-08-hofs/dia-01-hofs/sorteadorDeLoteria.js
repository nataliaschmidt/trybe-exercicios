// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

const checkNumber = (myNumber, number) =>  myNumber === number

const randomNumber = (myNumber, checkNumber) => {
  const number = Math.floor((Math.random() * 6));

  return checkNumber(myNumber, number) ? 'Parabéns, você ganhou' : 'Tente Novamente'
}

console.log(randomNumber(2, checkNumber));