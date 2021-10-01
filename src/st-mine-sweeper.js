import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  let i = 0;
  let k = 0;
  let chekArea = [];
  const mine = [];
  for (i = 0; i < matrix.length; i++) {
    for (k = 0; k < matrix[i].length; k++) {
      if (matrix[i][k] === true) {
        // eslint-disable-next-line no-param-reassign
        matrix[i][k] = 1;
        mine.push([i, k]);
      }
    }
  }
  // eslint-disable-next-line no-shadow
  function countMineAround (mine, chekArea) {
    // eslint-disable-next-line no-shadow
    let i = 0;
    let count = 0;
    for (i = 0; i < mine.length; i++) {
      // eslint-disable-next-line no-use-before-define
      count += chekerMine(mine[i], chekArea);
    }
    return count;
  }
  // eslint-disable-next-line no-shadow
  function chekerMine (mine, chekArea) {
    let floor = 0;
    let door = 0;
    floor = Math.abs(mine[0] - chekArea[0]);
    door = Math.abs(mine[1] - chekArea[1]);
    if (floor <= 1 && door <= 1) {
      return 1;
    } return 0;
  }
  for (i = 0; i < matrix.length; i++) {
    for (k = 0; k < matrix[i].length; k++) {
      if (matrix[i][k] === false) {
        chekArea.push(i, k);
        // eslint-disable-next-line no-param-reassign
        matrix[i][k] = countMineAround(mine, chekArea);
        chekArea = [];
      }
    }
  }
  return matrix;
}
