const arrayValor = [9, 1, 2, 3, 9, 5, 7];
const arrayValor2 = [0, 4, 4, 4, 9, 10, 9, 2, 1];
const arrayValor3 = [0, 0, 0];

const highestCount = (numbers) => {
  let result = 0;
  let count = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > result) {
      result = numbers[index];
    }
  }
  for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    if (result === numbers[index2]) {
      count += 1;
    }
  }
  return count;
};

console.log(highestCount(arrayValor3));
