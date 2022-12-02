const array = [2, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 9, 0];

const number = (arr) => {
  const obj = {};

  for (const num of arr) {
    if (obj[num]) {
      obj[num] += 1;
    } else {
      obj[num] = 1;
    }
  }
  for (const key in obj) {
    console.log(obj[key]);
  }
  return obj;
};
console.log(number(array));
