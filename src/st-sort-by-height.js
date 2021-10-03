import { NotImplementedError } from '../extensions/index.js'

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
  let negIndex = arr.reduce(function (a, e, i) {
    if (e === -1) a.push(i)
    return a
  }, [])
  console.log(`${negIndex}`)
  const removedNegNumAndSorted = arr.filter((el) => el !== -1).sort((a, b) => a - b)

  for (const num of negIndex) {
    removedNegNumAndSorted.splice(num, 0, -1)
  }

  return removedNegNumAndSorted
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))

// let buff arr

// let sortedArr = arr.map((el, idx) => {
//   if (el === -1 && idx === 0) {
//     return new Array(el)
//   } else {

//   }
// })

/***
 * 
 * 
 * 
 * 
 * 
 * 
 * 
  const splitArr = arr
    .reduce((acc, el, idx) => {
      console.log(`\nreduce ${idx}`)
      console.log(`buffArr = ${buffArr}`)
      if (el !== -1) {
        console.log(`el != -1: ${el}`)
        buffArr.push(el)
        if (arr[idx + 1] === -1 && !sorted) {
          console.log(`time to sort!`)
          buffArr.sort((a, b) => a - b)
          acc.push(buffArr.slice())
          buffArr.length = 0
          sorted = true
          console.log(`buffArr ${buffArr}`)
        }
      } else if (el === -1) {
        acc.push(el)
        sorted = false
      }
      console.log(`before return buffArr ${buffArr}`)
      return acc
    }, [])
    .concat(buffArr)

  return splitArr.flat()
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

// //

// reducer

// const splitArr = arr.reduce((acc, el, idx, arr) => {
//   console.log(`\nreduce ${idx}`)
//   console.log(`buffArr = ${buffArr}`)
//   if (el === -1 && idx === 0) {
//     acc.push(el)
//   } else if (el !== -1) {
//     console.log(`el != -1: ${el}`)
//     buffArr.push(el)
//     if (arr[idx + 1] === -1) {
//       console.log(`time to sort!`)
//       buffArr.sort((a, b) => a - b)
//       acc.push(buffArr.slice())
//       buffArr.length = 0
//       console.log(`buffArr ${buffArr}`)
//     }
//   } else if (el === -1) {
//     acc.push(el)
//   }
//   return acc
// }, [])

// console.log(`\nreduce ${idx}`)
// console.log(`buffArr = ${buffArr}`)
// if (el === -1 && idx === 0) {
//   acc.push(el)
// } else if (el !== -1) {
//   console.log(`el != -1: ${el}`)
//   buffArr.push(el)
//   if (arr[idx + 1] === -1 && !sorted) {
//     console.log(`time to sort!`)
//     buffArr.sort((a, b) => a - b)
//     acc.push(buffArr.slice())
//     buffArr.length = 0
//     sorted = true
//     console.log(`buffArr ${buffArr}`)
//   }
// } else if (el === -1) {
//   acc.push(el)
// }

// console.log(`before return ${buffArr}`)
// return acc
// }, [])
