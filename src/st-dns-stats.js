import { NotImplementedError } from '../extensions/index.js'

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  if (domains.length === 0) return {}
  const DNS = {}

  domains.forEach((el, idx) => {
    let elArr = el.split('.').reverse()
    let dom = ''
    elArr.forEach((el, idx) => {
      dom += '.' + elArr[idx]
      // check value key in object
      if (!DNS.hasOwnProperty(dom)) {
        DNS[dom] = 1
      } else {
        DNS[dom] += 1
      }
    })
  })
  return DNS
}

// console.log(getDNSStats(['epam.com'])) //, { '.com': 1, '.com.epam': 1 });
// console.log(getDNSStats(['epam.com', 'info.epam.com'])) //, { '.com': 2, '.com.epam': 2, '.com.epam.info': 1 });
// console.log(getDNSStats([])) //, {});

// old solution

// // let splitDomains = domains
// //   .map((el) => {
// //     return el.split('.')
// //   })
// //   .flat()
// // // console.log(splitDomains)

// // splitDomains.forEach((el) => {
// //   splitDomains.find()
// // })

// let reversedDomains = domains.map((el) => {
//   let buffArr = el.split('.').reverse()
//   buffArr.splice(0, 0, ' ')

//   return buffArr.join('.').trim()
// })
// console.log(reversedDomains)

// if (idx > 0) {
//   for (let i = 0; i < idx; i++) {
//     el = '.' + elArr[i]
//   }
// } else {
//   el = '.' + el
// }
