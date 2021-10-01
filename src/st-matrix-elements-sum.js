import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let i = 0;
  let add = 0;
  let arr = [];
  let helper;
  let k = 0;
  for (i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] !== 0) {
      add += matrix[0][i];
      arr.push(i);
    }
  }
  if (arr.length > 0) {
    for (i = 1; i < matrix.length; i++) {
      for (k = 0; k < arr.length; k++) {
        helper = arr[k];
        // eslint-disable-next-line eqeqeq
        if (matrix[i][helper] !== 0) {
          add += matrix[i][helper];
        }
      } arr = [];
      for (k = 0; k < matrix[i].length; k++) {
        if (matrix[i][k] !== 0) {
          arr.push(k);
        }
      }
    }
    return add;
  }
  return 0;
}