import { NotImplementedError } from '../extensions/index.js'

const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sample) {
  if (arguments.length === 0) false

  if (typeof sample !== 'string') false

  if (!isNaN(sample) && Number(sample) > 0 && Number(sample) < 15) {
    // sample = sample.match(/\d.*/gm);
    const N_0_over_N = MODERN_ACTIVITY / sample
    const k = 0.693 / HALF_LIFE_PERIOD
    let t = Math.ceil(Math.log(N_0_over_N) / k)

    return t
  }
  return false
}

// console.log(dateSample('1'));
// console.log(dateSample('-1'));
// console.log(dateSample('WOOT!'));

// console.log(dateSample('3'), 13305);
// console.log(dateSample('1'), 22387);
// console.log(dateSample('9'), 4223);
// console.log(dateSample('11'), 2564);

// console.log(dateSample('3.142'), 12923);
// console.log(dateSample('1.1'), 21599);
// console.log(dateSample('9.8888'), 3445);
// console.log(dateSample('9.59383373526808'), 3695);
// console.log(dateSample('9.122605776326203'), 4111);
// console.log(dateSample('8.738732722522064'), 4467);

// console.log(dateSample(3), false);
// console.log(dateSample(3.312312), false);
// console.log(dateSample(false), false);
// console.log(dateSample(null), false);
// console.log(dateSample(undefined), false);
// console.log(dateSample([3]), false);
// console.log(dateSample(['3']), false);
// console.log(dateSample({ 3.14: '3dec' }), false);
