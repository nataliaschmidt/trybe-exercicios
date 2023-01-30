const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.

const expectedResult = 20;

const lettersArray = names.join('').toLowerCase().split('')

console.log(lettersArray);

const countA = () => lettersArray.reduce((acc, curr) => curr === 'a' ? acc += 1 : acc, 0);

console.log(countA());