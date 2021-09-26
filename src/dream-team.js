import { NotImplementedError } from '../extensions/index.js'

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(array) {
  // check empty argument
  if (!array) return false
  if (!Array.isArray(array)) return false

  let teamName = []

  for (let el of array) {
    if (typeof el === 'string') {
      let char_0 = el.trim().charAt(0).toUpperCase()
      teamName.push(char_0)
    }
  }

  return teamName.sort().join('')
}

console.log(createDreamTeam([' Matt', 'Ann', ' Dmitry', 'Max']))
console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]))
console.log(createDreamTeam())
