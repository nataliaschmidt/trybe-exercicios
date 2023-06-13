const { log } = require('console');

const fs = require('fs').promises;

// função que irá trabalhar no arquivo simpsons.json
async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent); // convertendo o arquivo json para um array
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

  strings.forEach(personagem => console.log(personagem));
}


async function getSimpsonById(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);
  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

  if (!chosenSimpson) {
    /* A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
     * Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
     * tendo como motivo o que passarmos para o `throw`.
     * Ou seja, a linha abaixo rejeita a Promise da nossa função com um Erro que tem a mensagem 'id não encontrado'
     */
    throw new Error('id não encontrado');
  }
  /* Da mesma forma que `throw` aciona o fluxo de erro e rejeita a Promise,
      * `return` aciona o fluxo de sucesso e resolve a Promise.
      * Sendo assim, a linha abaixo é equivalente a chamar `resolve(chosenSimpson)`
      * dentro do executor de uma Promise.
      */
  return chosenSimpson;
}

async function filterSimpsons() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const newArray = simpsons.filter(simpson => simpson.id !== '6' && simpson.id !== '10');
  console.log(newArray);
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

async function createSimpsonsFamily() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const familyIds = [1, 2, 3, 4];
  const simpsonsFamily = simpsons.filter(simpson => familyIds.includes(Number(simpson.id)));
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

async function addSimpsonInFamily() {
  const fileContent = await fs
    .readFile('./simpsonsFamily.json', 'utf-8');

  const simpsonsFamily = JSON.parse(fileContent);

  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}


async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

  const simpsonsWithMaggie = simpsonsWithoutNelson
    .concat([{ id: '15', name: 'Maggie Simpson' }]);
  // com spread seria assim:
  // const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]

  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
}


function main() {
  // await readAll();
  // const findSimpson = await getSimpsonById(3)
  // console.log(findSimpson);
  // filterSimpsons()
  // createSimpsonsFamily();
  // addSimpsonInFamily();
  // replaceNelson();
}

main();