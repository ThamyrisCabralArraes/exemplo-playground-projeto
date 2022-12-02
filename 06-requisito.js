const calcTriangleArea = (base, heigth) => {
  let trianguloResult = (base * heigth) / 2;
  return trianguloResult;
};
calcTriangleArea();

const calcRectangleArea = (base, heigth) => {
  let rectangleArea = base * heigth;
  return rectangleArea;
};
calcRectangleArea();

const calcAllAreas = (base, heigth, form) => {
  if (form === 'triângulo') {
    return `O valor da área do ${form} é: ${calcTriangleArea(base, heigth)}`;
  } else if (form === 'retângulo') {
    return `O valor da area do ${form} é: ${calcRectangleArea(base, heigth)}`;
  } else {
    return `Não foi possível fazer o cálculo, insira uma forma geométrica válida`;
  }
};

console.log(calcAllAreas(10, 50, 'quadrado'));
