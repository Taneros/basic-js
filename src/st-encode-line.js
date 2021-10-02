import { NotImplementedError } from '../extensions/index.js'

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
  if (!str) return ''

  let strSepArr = str.match(/(\w)\1+|(\w)/g)
  // console.log(strSepArr)
  let rleArr = strSepArr.map((el) => {
    return el.length > 1 ? el.length + el[0] : el[0]
  })
  return rleArr.join('')
}

console.log(encodeLine('aaaatttt')) //, '4a4t')
console.log(encodeLine('aabbccc')) //, '2a2b3c')
console.log(encodeLine('abbcca')) //, 'a2b2ca')
console.log(encodeLine('xyz')) //, 'xyz')
console.log(encodeLine('')) //, '')

// old solution
// const countArr = []

// strToArr.forEach((el, idx) => {
//   let buffArr = []
//   if (countArr.length && countArr[countArr.length - 1][1] === el) {
//     countArr[countArr.length - 1][0] += 1
//   } else {
//     buffArr.push(1)
//     buffArr.push(el)
//     countArr.push(buffArr)
//   }
// })
// return countArr.flat().join('')
