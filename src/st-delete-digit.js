import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
	let str = n.toString()
	let arr = str.split('');
	let arrN = [];
	let string = ''
	for (let i = 0; i < arr.length; i++) {
		for (let k = 0; k < arr.length; k++) {
			if (i != k) {
				string += arr[k];
			}
		}
		arrN.push(Number(string));
		string = '';
	}
	arrN.sort(function (a, b) { return b - a});
	return arrN[0];
}
