const triangleCheck = (lineA, lineB, lineC) => {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else if (lineB < lineA + lineC && lineA > Math.abs(lineA - lineC)) {
    return true;
  } else if (lineC < lineB + lineA && lineA > Math.abs(lineB - lineA)) {
    return true;
  } else {
    return false;
  }
};
console.log(triangleCheck(10, 14, 8));
