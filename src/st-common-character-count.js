import { NotImplementedError } from '../extensions/index.js'

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let count = 0
  const counted = []
  s1 = s1.split('').sort()
  s2 = s2.split('').sort()
  console.log(s1, s2)
  s1.forEach((el, idx) => {
    if (s2.includes(el)) {
      count++
      s2.splice(s2.indexOf(el), 1)
    }
  })

  return count
}

// console.log(getCommonCharacterCount('aabcc', 'adcaa')) //, 3);
// console.log(getCommonCharacterCount('zzzz', 'zzzzzzz')) //, 4);
// console.log(getCommonCharacterCount('abca', 'xyzbac')) //, 3);
// console.log(getCommonCharacterCount('', 'abc')) //, 0);
// console.log(getCommonCharacterCount('a', 'b')) //, 0);
