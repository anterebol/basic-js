import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let i = 0;
  let str;
  let arr = [];
  const array = [];
  let k = 0;
  let long;
  const obj = {};
  for (i = 0; i < domains.length; i++) {
    str = domains[i];
    arr.push(str.split('.').reverse());
  }
  for (i = 0; i < arr.length; i++) {
    str = '';
    for (k = 0; k < arr[i].length; k++) {
      str += `.${arr[i][k]}`;
      array.push(str);
    }
  }
  arr = [];
  for (i = 0; i < array.length; i++) {
    long = array.length;
    // eslint-disable-next-line no-use-before-define
    obj[`${array[i]}`] = countElem(array, array[i]);
    str = array[i];
    for (k = 0; k < array.length; k++) {
      if (str === array[k]) {
        array.splice(k, 1);
        k -= 1;
      }
    }
    if (long !== array.length) {
      i = -1;
    }
  } return obj;
}
function countElem(arr, elem) {
  let count = 0;
  let i = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      count += 1;
    }
  }
  return count;
}
