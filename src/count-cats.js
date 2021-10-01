export default function countCats( backyard ) {
  let number = 0;
  let fens = [];
  for (let i = 0; i < backyard.length; i++) {
    fens = backyard[i];
    for (let k = 0; k < fens.length; k++ ) {
      if (fens[k] == '^^') {
        number = number +1;
      }
    }
  }
  return number;
};
