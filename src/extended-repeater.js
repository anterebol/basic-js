

export default function repeater( str, options ) {
let n = options.repeatTimes;
let sep = options.separator;
let add = options.addition;
let addn = options.additionRepeatTimes;
let addSep = options.additionSeparator;
let answer = '';
if (str === undefined) {
  return false;
}
  if (sep === undefined) {
sep = '+';
  }
  if (addSep === undefined) {
    addSep = '|';
  }
  if (addn === undefined) {
    addn = 1;
  }
  if (add === undefined) {
    add = '';
  }
  if (n === undefined) {
    n = 1;
  }
  for (let i = 0; i < n; i++) {
answer = answer + str;
  for (let k = 0; k < addn; k++) {
    if (k != addn - 1 ) {
    answer = answer + add + addSep;
  }
  else {
    answer = answer + add;
  }
}
  if (i != n - 1 ) {
    answer = answer + sep;
  }
  }
  return answer;
};
  