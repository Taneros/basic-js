import { NotImplementedError } from '../extensions/index.js'

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  const numArr = String(n).split('')

  console.log(numArr)
  let sum = numArr.reduce((acc, el) => {
    el = Number(el)
    acc += el
    console.log(`acc = ${acc} el = ${el}`)
    if (acc < 10) {
      return acc
    }
    return getSumOfDigits(acc)
  }, 0)
  return sum
}

// console.log(getSumOfDigits(91)) //1
// console.log(getSumOfDigits(100)) //1
// console.log(getSumOfDigits(35)) //8
console.log(getSumOfDigits(199)) //1

/****
 * 
 * 
 * 
 * while (sum > 9) {
    console.log(`while loop ${sum}`)
    // loop for num.length - 2 times
    let sumEl = 0
    for (let i = 0; i < numArr.length - 2; i++) {
      console.log(`for loop ${i}`)
      sumEl += Number(numArr[i]) + Number(numArr[i + 1])
      if (sumEl > 9) {
        getSumOfDigits(sumEl)
      } else {
        sum = sumEl
      }
    }
    break
  }
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

/****
 * 
 *     numArr.forEach((el, idx) => {
      el = Number(el)
      let elNext = Number(idx + 1)
      let sumEl = el + elNext

      if (sumEl > 10) {
        getSumOfDigits(sumEl)
      } else {
        sum = sumEl
      }
    })
 * 
 * 
 * 
 *   const unitsArr = [
    ...Array.from(String(n)),
    ...n
      .toString()
      .split('')
      .reduce(function (acc, a) {
        acc = acc.map(function (b) {
          return b + '0'
        })
        acc.push(a)
        return acc
      }, [])
      .join('')
      .split(''),
  ]

  const unitsLength = unitsArr.length

  let maxEl = null

  for (let i = 0; i < unitsLength - 2; i++) {
    // take first el
    let el = Number(unitsArr[i])
    // take next
    let elNext = Number(unitsArr[i + 1])

    let sum = el + elNext

    let sumLength = sum.length

    if (sumLength < 2) {
      maxEl = sum
    }
  }

  return unitsArr
 * 
 * 
 * 
 */
