import { NotImplementedError } from '../extensions/index.js'

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 2, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'
  if (!(date instanceof Date)) throw new Error('Invalid date!')
  if (Object.entries(date).length > 0) throw new Error('Invalid date!')

  console.log(date)

  const month = date.getMonth()
  // winter check
  if (month === 11 || month === 0 || month === 1) {
    return 'winter'
  }
  // spring check
  if (month === 2 || month === 3 || month === 4) {
    return 'spring'
  }
  if (month === 5 || month === 6 || month === 7) {
    return 'summer'
  }
  if (month === 8 || month === 9 || month === 10) {
    return 'autumn'
  }
  return false
}

console.log(getSeason(new Date(2019, 11, 22, 23, 45, 11, 500))) // 'winter'
console.log(getSeason(new Date(2018, 4, 17, 11, 27, 4, 321))) // 'spring'
console.log(getSeason(new Date(2017, 6, 11, 23, 45, 11, 500))) // 'summer'
console.log(getSeason(new Date(1994, 8, 26, 3, 0, 11, 500))) // 'autumn'

// console.log(getSeason('foo')) //'Invalid date!'
// console.log(getSeason({ John: 'Smith' })) //'Invalid date!'
// console.log(getSeason(20192701)) //'Invalid date!'
// console.log(getSeason([2019, '27', 0 + '1'])) //'Invalid date!'
// console.log(getSeason(() => new Date())) //'Invalid date!'

// it.optional('returns proper value', () => {
//   const [
//       winter,
//       spring,
//       summer,
//       autumn,
//   ] = [
//           new Date(2019, 11, 22, 23, 45, 11, 500),
//           new Date(2018, 4, 17, 11, 27, 4, 321),
//           new Date(2017, 6, 11, 23, 45, 11, 500),
//           new Date(1994, 8, 26, 3, 0, 11, 500),
//       ];
//   assert.equal(getSeason(winter), 'winter');
//   assert.equal(getSeason(spring), 'spring');
//   assert.equal(getSeason(summer), 'summer');
//   expect(getSeason(autumn)).to.match(/autumn|fall/);
// });
