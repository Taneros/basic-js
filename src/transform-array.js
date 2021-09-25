import { NotImplementedError } from '../extensions/index.js'

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!")
  if (arr.length === 0) return arr
  // if (arr.every((el) => typeof el === 'number')) return arr

  const arrTrans = []
  let methodArr = ''

  arr.forEach((el, idx) => {
    console.log('\nforEach', el)
    // arrTrans.push(el)
    if (!['--double-next', '--double-prev', '--discard-next', '--discard-prev'].includes(el)) {
      console.log('number!')
      console.log('methodArr', methodArr)
      //--discard-next excludes the next element of the array from the transformed array.
      if (methodArr === '--double-next') {
        arrTrans.push(el)
        arrTrans.push(el)
      } else if (methodArr === '--double-prev' && idx > 1 && arr[idx - 3] !== '--discard-next') {
        arrTrans.push(arrTrans[arrTrans.length - 1])
        arrTrans.push(el)
      } else if (methodArr === '--discard-prev') {
        console.log('--discard-next', arr[idx - 3], arr[idx - 3] === '--discard-next')
        if (arr[idx - 3] === '--discard-next') {
          arrTrans.push(el)
        } else {
          arrTrans.pop()
          arrTrans.push(el)
        }
      } else if (methodArr !== '--discard-next') {
        arrTrans.push(el)
      }
      methodArr = ''
    }
    // --double-next doubles the next element of the array in the transformed array.
    else if (el === '--double-next') {
      methodArr = el
    }
    // --double-prev doubles the previous element of the array in the transformed array.
    else if (el === '--double-prev') {
      methodArr = el
    }
    // --discard-next excludes the next element of the array from the transformed array.
    else if (el === '--discard-next') {
      methodArr = el
      // --discard-prev excludes the previous element of the array from the transformed array.
    } else if (el === '--discard-prev') {
      methodArr = el
    }
  })
  return arrTrans
}

// ** basic sequences
// console.log(transform([1, 2, 3, '--double-next', 4, 5])) //=> [1, 2, 3, 4, 4, 5]
// console.log(transform([1, 2, 3, '--discard-prev', 4, 5])) // => [1, 2, 4, 5]

//** */ 'basic sequence interactions work well'
// console.log(transform(['--discard-prev', 1, 2, 3])) //-> [1,2,3]
// console.log(transform(['--double-prev', 1, 2, 3])) //-> [1,2,3]
// console.log(transform([1, 2, 3, '--double-next'])) //-> [1,2,3]
// console.log(transform([1, 2, 3, '--discard-next'])) //-> [1,2,3]

//
//** */ 'advanced sequence interactions work well'
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])) // -> [1, 2, 3, 4, 5]
// console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5])) // -> [1, 2, 3, 1337, 1337, 1337, 4, 5]
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5])) // -> [1, 2, 3, 4, 5]
// console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5])) // -> [1, 2, 3, 1337, 4, 5]

// switch (el) {
//   case el >= 0 && el <= 9:
//     console.log('number!')
//     if (methodArr === 'doub-n') {
//       arrTrans.push(el)
//       arrTrans.push(el)
//       methodArr = ''
//     } else {
//       arrTrans.push(el)
//     }
//     break

//   case '--double-next':
//     console.log('--double-next')
//     methodArr = 'doub-n'
//     break

//   case '--discard-prev':
//     methodArr = 'dis-p'
//     if (idx > 0) {
//     }
//     break

//   case '--discard-next':
//     methodArr = 'dis-n'
//     break

//   case '--double-prev':
//     methodArr = 'doub-p'
//     if (idx > 0) {
//       arrTrans.push(el)
//       arrTrans.push(el)
//     }
//     break
// }
