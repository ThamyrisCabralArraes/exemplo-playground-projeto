const array = [2, 15, 7, 9, 45];
const array2 = [9, 25];

const fizzBuzz = (number) => {
  const arrayFizzBuzz = [];
  for (let index = 0; index < number.length; index += 1) {
    if (number[index] % 5 === 0 && number[index] % 3 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (number[index] % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else if (number[index] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
};
console.log(fizzBuzz(array));
