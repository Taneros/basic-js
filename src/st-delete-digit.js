import { NotImplementedError } from '../extensions/index.js'

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
  let numStr = String(n)
    .split('')
    .map((el) => Number(el))
  console.log(numStr)
  let prevNum = null
  numStr.forEach((el, idx) => {
    let num = numStr.slice()
    num.splice(idx, 1)
    num = Number(num.join(''))
    console.log(num)
    prevNum < num ? (prevNum = num) : -1
  })
  return prevNum
}

console.log(deleteDigit(152)) //, 52);
// console.log(deleteDigit(1001)) //, 101);
// console.log(deleteDigit(10)) //, 1);
// console.log(deleteDigit(222219)) //, 22229);
// console.log(deleteDigit(109)) //, 19);
