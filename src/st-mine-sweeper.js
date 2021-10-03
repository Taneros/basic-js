import { NotImplementedError } from '../extensions/index.js'

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
  // const minesArr = new Array(matrix.length).slice().fill(new Array(matrix[0].length).fill(0))
  const minesArr = []

  matrix.forEach((el) => {
    minesArr.push(new Array(el.length).fill(0))
  })

  // console.log(minesArr)

  // take matrix row
  matrix.forEach((el_1, idx_1) => {
    console.log(`\nforEach el_1 = ${el_1} idx = ${idx_1}`)
    // for each row element in matrix
    el_1.forEach((el_2, idx_2) => {
      console.log(`el_2 = ${el_2} idx_2 = ${idx_2}`)
      if (el_2 === true) {
        minesArr[idx_1][idx_2] = 1
        // console.log(minesArr)
      } else if (el_2 === false) {
        // console.log(minesArr)
        // check directly left || same row , el[idx-1]
        if (matrix[idx_1][idx_2 - 1] && matrix[idx_1][idx_2 - 1] === true) {
          console.log('d-left +1')
          minesArr[idx_1][idx_2] += 1
        }
        // check directly right || same row , el[idx+ 1]
        if (matrix[idx_1][idx_2 + 1] && matrix[idx_1][idx_2 + 1] === true) {
          console.log('d-right +1')
          minesArr[idx_1][idx_2] += 1
        }
        // check directly below || row[idx+1] el[idx]
        //  check if not last row
        if (!(matrix.length - 1 - idx_1 === 0)) {
          //  and if cell below is true -> increase
          if (matrix[idx_1 + 1][idx_2] === true) {
            console.log('d-below +1')
            minesArr[idx_1][idx_2] += 1
          }
        }
        // check directly above || row [idx-1] el[idx]
        if (idx_1 !== 0) {
          //  and if cell below is true -> increase
          if (matrix[idx_1 - 1][idx_2] === true) {
            console.log('d-above +1')
            minesArr[idx_1][idx_2] += 1
          }
        }
        // check diagonals above
        if (idx_1 !== 0) {
          // diagonal up-left
          if (matrix[idx_1 - 1][idx_2 - 1] === true) {
            console.log('d-above +1')
            minesArr[idx_1][idx_2] += 1
          }
          // diagonal up-right
          if (matrix[idx_1 - 1][idx_2 + 1] === true) {
            console.log('d-above +1')
            minesArr[idx_1][idx_2] += 1
          }
        }
        // check diagonals below
        if (!(matrix.length - 1 - idx_1 === 0)) {
          // diagonal down-left
          if (matrix[idx_1 + 1][idx_2 - 1] === true) {
            console.log('d-above +1')
            minesArr[idx_1][idx_2] += 1
          }
          // diagonal down-right
          if (matrix[idx_1 + 1][idx_2 + 1] === true) {
            console.log('d-above +1')
            minesArr[idx_1][idx_2] += 1
          }
        }
      }
    })
  })
  // minesArr[0][0] = 1
  console.log('\n result')
  return minesArr
}

console.log(
  minesweeper([
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ])
)

console.log(
  minesweeper([
    [true, false],
    [false, true],
  ])
)
