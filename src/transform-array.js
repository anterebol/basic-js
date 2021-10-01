

export default function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error();
  }
  let new_massiv = [];
  let i = 0;
  for (i; i < arr.length; i++) {
    if (arr[i] === '--discard-next'){
      if (arr[i+1] != null) {
      i += 1;
  }
}
    else if (arr[i] === '--discard-prev'){
      if (arr[i - 2] != '--discard-next' &&  arr[i - 1] != null) {
      new_massiv.pop();
    }
  }
    else if (arr[i] === '--double-next'){
      if (arr[i + 1] != null )  {
      new_massiv.push(arr[i+1]);
      }
  }
    else if (arr[i] === '--double-prev'){
      if (arr[i - 2] != '--discard-next' &&  arr[i - 1] != null) {
      new_massiv.push(arr[i-1]);
    }
  }
  else {
    new_massiv.push(arr[i]);
  }
  }
      return new_massiv;
};
