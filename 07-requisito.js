const catAndMouse = (mouse, cat1, cat2) => {
  let catOne = mouse - cat1;
  let catTwo = mouse - cat2;
  if (catOne > catTwo) {
    return 'cat2';
  } else if (catTwo > catOne) {
    return 'cat1';
  } else {
    return `os gatos trombam e o rato foge`;
  }
};

console.log(catAndMouse(5, 3, 3));
