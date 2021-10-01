import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  function chek (value) {
    let i = 0;
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    for (i = 0; i < array.length; i++) {
      // eslint-disable-next-line eqeqeq
      if (value == array[i]) {
        return true;
      }
    }
    return false;
  }
  let i = 0;
  let count = 0;
  let arr = [];
  arr = n.split('-');
  if (arr.length === 6) {
    arr = arr.join('');
    for (i = 0; i < arr.length; i++) {
      // eslint-disable-next-line eqeqeq
      if (chek(arr[i]) == true) {
        count += 1;
      }
    }
    if (count === 12) {
      return true;
    }
  } return false;
}
