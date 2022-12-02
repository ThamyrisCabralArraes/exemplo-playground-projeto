const array = [1, 2, 2, 2, 2, 3, 3, 4, 9, 9, 1];

const maioresQueTres = (valor) => {
  let numeroMaior = {};
  for (let index of valor) {
    if (numeroMaior[index]) {
      numeroMaior[index] += 1;
    } else {
      numeroMaior[index] = 1;
    }
  }
  let verificacao = false;
  for (let index2 in numeroMaior) {
    if (numeroMaior[index2] >= 3) {
      verificacao = true;
    }
  }
  return verificacao;
};

const generatePhoneNumber = (number) => {
  if (number.length !== 11) {
    return `Array com tamanho incorreto`;
  }

  for (let num of number) {
    if (num < 0 || num > 9) {
      return `não é possível gerar um número de telefone com esses valores`;
    }
  }

  if (maioresQueTres(number)) {
    return `não é possível gerar um número de telefone com esses valores`;
  }
};
console.log(generatePhoneNumber(array));
