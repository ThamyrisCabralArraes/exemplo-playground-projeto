const footballPoints = (wins, ties) => {
  let numberWins = wins * 3;

  return numberWins + ties;
};
console.log(footballPoints(14, 8));
