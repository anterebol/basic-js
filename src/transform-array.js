

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error();
  }
  let new_massiv = [];
  let i = 0;
  for (i; i < arr.length; i++) {
    if (arr[i] === '--discard-next'){
      if (arr[i+1] != null) {
      //if (arr[i+1] != '--double-prev' || arr[i+1]  != '--double-next' || arr[i+1]  != '--discard-prev'  || arr[i+1]  != '--discard-next') {
      //new_massiv.push(arr[i+1]);
      i += 1;
  }
}
    else if (arr[i] === '--discard-prev'){
      if (arr[i - 2] != '--discard-next' &&  arr[i - 1] != null) {
     // if (arr[i-1] != '--double-prev' || arr[i-1] != '--double-next' || arr[i-1] != '--discard-prev' 
     //  || arr[i-1] != '--discard-next') {
      new_massiv.pop();
    }
  }
    else if (arr[i] === '--double-next'){
      if (arr[i + 1] != null )  {
     // if (arr[i+1] != '--double-prev' || arr[i+1]  != '--double-next' || arr[i+1]  != '--discard-prev' 
      //|| arr[i+1]  != '--discard-next') {
      new_massiv.push(arr[i+1]);
      }
  }
    else if (arr[i] === '--double-prev'){
      if (arr[i - 2] != '--discard-next' &&  new_massiv[i - 1] != null) {
      //if (arr[i-1] != '--double-prev' || arr[i-1] != '--double-next' || arr[i-1] != '--discard-prev' 
      //|| arr[i-1] != '--discard-next') {
      new_massiv.push(arr[i-1]);
    }
  }
  else {
    new_massiv.push(arr[i]);
  }
  /*for (i = 0; i < new_massiv.length; i++) {
    if (new_massiv[i] === undefined )  {
      new_massiv.splice(i, 1);
   //if (new_massiv[i] === '--double-prev' || new_massiv[i] === '--double-next' || new_massiv[i] === '--discard-prev'  || new_massiv[i] === '--discard-next') {
   //   new_massiv.splice(i, 1);
   }
 }
}*/
  }
      return new_massiv;
};
