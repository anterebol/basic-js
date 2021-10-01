import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let i; let
    k;
  const helper = -1;
  const arrSort = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== helper) {
      arrSort.push(arr[i]);
    }
  }
  if (arrSort.length > 0) {
    arrSort.sort((a, b) => a - b);
    k = 0;
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== helper) {
      // eslint-disable-next-line no-param-reassign
      arr[i] = arrSort[k];
      k += 1;
    }
  }
  return arr;
}

