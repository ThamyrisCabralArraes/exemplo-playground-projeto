const array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
const array2 = ['foguete', 'não', 'tem', 'ré'];
const concatName = (frase) => {
  let ultimoItem = frase[frase.length - 1];
  let primeiroItem = frase[0];
  return `${ultimoItem}, ${primeiroItem}`;
};
console.log(concatName(array2));
