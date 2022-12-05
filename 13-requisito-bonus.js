// var regex = /\d+/g;
// var string = 'you can enter maximum 500 choices';
// var matches = string.match(regex); // creates array from matches

// console.log(matches);

const hydrate = (frase) => {
  let number = /\d+/g;
  let value = frase.match(number);
  console.log(value);
  //let numeroInteiro = parseInt(value);
  //console.log(numeroInteiro);
  let result = 0;
  for (let index = 0; index < value.length; index += 1) {
    result += parseInt(value[index]);
  }
  if (result > 1) {
    return `${result} copos de água`;
  } else {
    return `${result} copo de água`;
  }
};
console.log(hydrate(`1 cachaça`));
