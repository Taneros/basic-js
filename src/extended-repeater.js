import { NotImplementedError } from '../extensions/index.js'

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

export default function repeater(str, options) {
  str = str === undefined ? '' : String(str)
  // console.log('str', str)
  const additionStr = options.addition === undefined ? '' : String(options.addition)

  const sep = options.separator ? options.separator.toString() : '+'
  const addSep = options.additionSeparator ? options.additionSeparator.toString() : '|'
  let repeatStr = []
  let alreadyAdded = false
  const additionRepeatTimes = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes

  // check times to repeat total
  if (options.repeatTimes) {
    console.log('options.repeatTimes', options.repeatTimes)
    for (let i = 0; i < options.repeatTimes; i++) {
      console.log('\noptions.repeatTimes loop is running!', i + 1, 'times')
      let buffAddArr = []
      // check times to add
      if (additionStr && !alreadyAdded) {
        for (let i = 0; i < additionRepeatTimes; i++) {
          console.log('options.addtion loop is running!', i + 1, 'times')
          buffAddArr.push(additionStr)
        }
        // add repeated part to original str
        str = str + buffAddArr.join(`${addSep}`)
        repeatStr.push(str)
        alreadyAdded = true
      } else repeatStr.push(str)
    }
  } else return str + options.addition ? str + options.addition : null
  return repeatStr.join(`${sep}`)
}
// console.log(repeater('STRING_OR_DEFAULT', { repeatTimes: 2, addition: 'STRING_OR_DEFAULT' })) // 'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT'

// export default function repeater(str, options) {
//   str = str === null ? 'null' : String(str)
//   console.log('str', str)
//   const additionStr = options.addition === null ? 'null' : String(options.addition)

//   const sep = options.separator ? options.separator.toString() : '+'
//   const addSep = options.additionSeparator ? options.additionSeparator.toString() : '|'
//   let repeatStr = []
//   let alreadyAdded = false
//   // check times to repeat total
//   if (options.repeatTimes) {
//     console.log('options.repeatTimes', options.repeatTimes)
//     for (let i = 0; i < options.repeatTimes; i++) {
//       console.log('\noptions.repeatTimes loop is running!', i + 1, 'times')
//       // check times to add
//       let buffAddArr = []
//       // if (options.addition && !alreadyAdded) {
//       if (additionStr && !alreadyAdded) {
//         for (let i = 0; i < options.additionRepeatTimes; i++) {
//           console.log('options.addtion loop is running!', i + 1, 'times')
//           buffAddArr.push(additionStr)
//         }
//         // add repeated part to original str
//         str = str + buffAddArr.join(`${addSep}`)
//         repeatStr.push(str)
//         alreadyAdded = true
//       } else repeatStr.push(str)
//     }
//   } else return str + options.addition ? str + options.addition : null
//   return repeatStr.join(`${sep}`)
// }

// console.log(repeater('la', { repeatTimes: 3 })) //, 'la+la+la')
// console.log(repeater('single', { repeatTimes: 1 })) //, 'single')
// console.log(repeater('12345', { repeatTimes: 5 })) //, '12345+12345+12345+12345+12345')

// 'supports basic addition'
// console.log(repeater('la', { repeatTimes: 3, separator: '*', addition: '+', additionRepeatTimes: 1 })) //, 'la+*la+*la+');
// console.log(repeater('LALA', { repeatTimes: 3, separator: '***', addition: '++', additionRepeatTimes: 1 })) //, 'LALA++***LALA++***LALA++');

//'supports missing repeat counters'
// console.log(repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' })) //, 'TESTstrADD!');

// 'some pack of tests
// console.log(repeater('STR', { repeatTimes: 4, separator: '--', addition: 'addme', additionRepeatTimes: 2, additionSeparator: '++' }))

// console.log(repeater('9UXKEEt8Aq', { repeatTimes: 4, separator: '1L467Kdqx2', addition: 'IMqCarClDg', additionRepeatTimes: 8, additionSeparator: 'U7L9D0f8pb' }))
// '9UXKEEt8AqIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDg1L467Kdqx29UXKEEt8AqIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDg1L467Kdqx29UXKEEt8AqIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDg1L467Kdqx29UXKEEt8AqIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDg'

// 'correctly works with no separator & no additionSeparator'
// console.log(repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionRepeatTimes: 3 })) // 'REPEATABLE_STRINGADDITION|ADDITION|ADDITION+REPEATABLE_STRINGADDITION|ADDITION|ADDITION');
// console.log(repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionSeparator: '222', additionRepeatTimes: 3 })) // 'REPEATABLE_STRINGADDITION222ADDITION222ADDITION+REPEATABLE_STRINGADDITION222ADDITION222ADDITION');
// console.log(repeater('REPEATABLE_STRING', { repeatTimes: 2, separator: '222', addition: 'ADDITION', additionRepeatTimes: 3 })) // 'REPEATABLE_STRINGADDITION|ADDITION|ADDITION222REPEATABLE_STRINGADDITION|ADDITION|ADDITION');

// extended requirement
// supports different str & addition'
// console.log(repeater(9.234, { repeatTimes: 4, separator: '||', addition: { a: 5 }, additionRepeatTimes: 3, additionSeparator: '&&' })) // '9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]');
// console.log(repeater(-222, { repeatTimes: 4, separator: '||', addition: new Map(), additionRepeatTimes: 3, additionSeparator: '&&' })) // '-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]');
// console.log(repeater(new Set(), { repeatTimes: 3, separator: '??? ', addition: [1, 2, 3, '4'], additionRepeatTimes: 2, additionSeparator: '!!!' }))// '[object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4');
// console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' })) // 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false');
// console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' })) // 'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null');

// 'correctly converts str and addition options to string'
// const objWithSpecificCoercion = {
//   [Symbol.toPrimitive]: (hint) => {
//     hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
//   },
// }

// console.log(repeater(objWithSpecificCoercion, { repeatTimes: 2, addition: objWithSpecificCoercion })) // 'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT')

// old solution

// const additionStr = Object.keys(options).includes('addition') ? (options.addition === null ? 'null' : options.addition.toString()) : null
