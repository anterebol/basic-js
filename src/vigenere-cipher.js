
export default class VigenereCipheringMachine  {
  constructor (value) {
 this.value = value;
  }      
encrypt (str, key) {
  str = code(str);
  key = code(key);
  let cheng = [];
  let i;
  let k =0;
  for (i = 0; i < str.length; i++) {
    if (typeof (str[i]) != 'number') {
      cheng.push(str[i]);
    }
    else if (str[i] >= 0) {
      if (k < key.length) {
        cheng.push(str[i] + key[k]);
        k += 1;
      }
      else {
        k = 0; 
        i = i - 1;
      }
    }
  }
  for (i = 0; i < cheng.length; i++) {
    if (typeof (cheng[i]) == 'number') {
    if (cheng[i] > 25) {
      cheng[i] = cheng[i] - 26;
    }
      else {
        cheng[i] = cheng[i];
      }
  }
  }
  cheng = decode(cheng);
function decode (codx) {
   let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  for (let i = 0; i < codx.length; i++) {
      if (typeof (codx[i]) == 'number') {
     let v = codx[i];
  codx[i] = arr[v];
  }
    else {
      codx[i] = codx[i];
    }
  }
return codx;
}
  function code (str) {
    function chek (value) {
      let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for (let i = 0; i < arr.length; i++) {
      if (value === arr[i]) {
        return i;
      }
    }
      return value;
    }
   str = str.toLowerCase();
    let i = 0;
    let keyx = [];
    for (i = 0; i < str.length; i++) {
      keyx.push(chek(str[i]));
        }
    return keyx;
  }
  cheng = cheng.join('').toUpperCase();
  return cheng;
}
 decrypt (str, key) {
  str = code(str);
  key = code(key);
  let cheng = [];
  let i;
  let k = 0;
  for (i = 0; i < str.length; i++) {
    if (typeof (str[i]) != 'number') {
      cheng.push(str[i]);
    }
    else if (str[i] >= 0) {
      if (k < key.length) {
        cheng.push(str[i] - key[k]);
        k += 1;
      }
      else {
        k = 0; 
        i = i - 1;
      }
    }
  }
  for (i = 0; i < cheng.length; i++) {
    if (typeof (cheng[i]) == 'number') {
    if (cheng[i] < 0) {
      cheng[i] = cheng[i] + 26;
    }
      else {
        cheng[i] = cheng[i];
      }
  }
  }
  cheng = decode(cheng);
function decode (codx) {
   let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  for (let i = 0; i < codx.length; i++) {
      if (typeof (codx[i]) == 'number') {
     let v = codx[i];
  codx[i] = arr[v];
  }
    else {
      codx[i] = codx[i];
    }
  }
return codx;
}
  function code (str) {
    function chek (value) {
      let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for (let i = 0; i < arr.length; i++) {
      if (value === arr[i]) {
        return i;
      }
    }
      return value;
    }
   str = str.toLowerCase();
    let i = 0;
    let keyx = [];
    for (i = 0; i < str.length; i++) {
      keyx.push(chek(str[i]));
        }
    return keyx;
  }
  cheng = cheng.join('').toUpperCase();
  return cheng;
}
  }
