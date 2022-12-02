const arrayTech = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
const techList = (array, stryng) => {
  let techObject = [];

  if (array.length === 5) {
    array = array.sort();
  }

  for (let index = 0; index < array.length; index += 1) {
    if (index < array.length) {
      techObject.push({
        tech: array[index],
        name: stryng,
      });
    } else {
      techObject.push({
        tech: '',
        name: '',
      });
    }
  }

  return techObject;
};
console.log(techList(arrayTech, 'Thamyris'));
