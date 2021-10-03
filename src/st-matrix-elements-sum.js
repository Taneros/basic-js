import { NotImplementedError } from '../extensions/index.js'

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
  let count = 0

  matrix.forEach((el_1, idx_1) => {
    el_1.forEach((el_2, idx_2) => {
      if (idx_1 === 0 || matrix[idx_1 - 1][idx_2] !== 0) {
        count += el_2
      }
    })
    return count
  })

  return count
}

console.log(
  getMatrixElementsSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ])
)
// ) //9

// console.log(
//   getMatrixElementsSum([
//     [1, 2, 3, 4],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3],
//   ])
// )
// // ) //15

// console.log(
//   getMatrixElementsSum([
//     [1, 1, 1],
//     [2, 2, 2],
//     [3, 3, 3],
//   ])
// )
// ) //18

console.log(getMatrixElementsSum([[0]])) //, 0)

console.log(getMatrixElementsSum([[1], [5], [0], [2]])) //, 6)

// old solutioin

// matrix.forEach((el_1, idx) => {
//   console.log('\nforEach el', el_1, 'idx-', idx)
//   count += el_1.reduce((acc, el_2) => {
//     console.log(`reduce el ${el_2}`)
//     if (idx === 0) {
//       return (acc += el_2)
//     } else if (matrix[idx - 1][idx] !== 0) {
//       return (acc += el_2)
//     } else return 0
//   }, 0)
// })
