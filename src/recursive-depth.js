import { NotImplementedError } from '../extensions/index.js'

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    let prevDepth = depth
    for (let el of arr) {
      if (Array.isArray(el)) {
        let newDepth = this.calculateDepth(el, depth + 1)
        if (newDepth > prevDepth) {
          prevDepth = newDepth
        }
      }
    }
    return prevDepth
  }
}

const depthCalc = new DepthCalculator()

// console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5])) //=> 1

// console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]])) //=> 2

// console.log(depthCalc.calculateDepth([[[]]])) // => 3

// 'returns correct depth of nested arrays'

// console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5, [1]])) //-> 2);
// console.log(depthCalc.calculateDepth([1, 2, 3, [1], 4, 5, [1]])) //-> 2);
// console.log(depthCalc.calculateDepth([1, 2, 3, [8, [2]], 4, 5, []])) //-> 3);
// console.log(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []])) // -> 4);
// console.log(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]])) // -> 5);
// console.log(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]])) // -> 15);
// console.log(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]])) // -> 25)
// console.log(
//   depthCalc.calculateDepth([
//     1,
//     [8, [[]]],
//     [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]],
//     2,
//     3,
//     [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]],
//     [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]],
//     4,
//     5,
//     ['6575', ['adas', ['dfg', [0]]]],
//   ])
// ) // -> 31

// return Array.isArray(arr) ? 1 + Math.max(...arr.map((el) => this.calculateDepth(el))) : 0
