const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  let new_massiv = arr;
  let i = 0;
  for (i; i < arr.length; i++) {
    if (arr[i] === '--discard-next'){
      new_massiv.splice(i, 2);
    }
    else if (arr[i] === '--discard-prev'){
      new_massiv.splice(i-1, 2)
    }
    else if (arr[i] === '--double-next'){
      new_massiv.splice(i, 1, arr[i+1]);
    }
    else if (arr[i] === '--double-prev'){
      new_massiv.splice(i, 1, arr[i-1]);
    }
      }
  for (i; i < new_massiv.length; i++) {
    if (typeof(new_massiv[i]) !== 'number') {
      new_massiv.splice(i, 1);
    }
  }
      return new_massiv;
};
