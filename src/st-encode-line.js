import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let i = 0;
  const count = 0;
  let helper = 0;
  let arr = [];
  // eslint-disable-next-line no-param-reassign
  str = str.split('');
  for (i = 0; i < str.length + 1; i++) {
    if (str[count] === str[i]) {
      helper += 1;
    } else {
      if (helper > 1) {
        arr.push(`${helper}${str[count]}`);
      } else {
        arr.push(str[count]);
      }
      str.splice(count, helper);
      helper = 1;
      if (str.length > 0) {
        i = 0;
      }
    }
  }
  arr = arr.join('');
  return arr;
}
