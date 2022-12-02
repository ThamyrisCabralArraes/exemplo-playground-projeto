const encode = (frase) => {
  let novaFrase = frase.replaceAll('a', 1);
  novaFrase = novaFrase.replaceAll('e', 2);
  novaFrase = novaFrase.replaceAll('i', 3);
  novaFrase = novaFrase.replaceAll('o', 4);
  novaFrase = novaFrase.replaceAll('u', 5);

  return novaFrase;
};
const test = encode('how are you today');
console.log(test);

const decode = (frase) => {
  let novaFrase = frase.replaceAll(1, 'a');
  novaFrase = novaFrase.replaceAll(2, 'e');
  novaFrase = novaFrase.replaceAll(3, 'i');
  novaFrase = novaFrase.replaceAll(4, 'o');
  novaFrase = novaFrase.replaceAll(5, 'u');

  return novaFrase;
};
console.log(decode(test));
