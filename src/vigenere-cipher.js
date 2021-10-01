import { NotImplementedError } from '../extensions/index.js'

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(direction) {
    this.reverseTrue = direction
    this.table = null
  }

  genTable() {
    // alphabet shifting func
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const shiftedAlphabet = []
    // console.log('111', shiftedAlphabet)
    for (let i = 0; i < 26; i++) {
      if (i === 0) {
        shiftedAlphabet.push(alphabet.slice())
      } else {
        alphabet.push(alphabet.shift())
        shiftedAlphabet.push(alphabet.slice())
      }
    }
    // return shiftedAlphabet
    return (this.table = shiftedAlphabet)
  }

  genKey(message, keyword) {
    let key = keyword.toLowerCase()
    const nonAlphChar = /[^A-Za-z]/g
    let strippedMess = message.replace(nonAlphChar, '')
    // console.log('strippedMess', strippedMess)
    // find length diff
    let diff = strippedMess.length - keyword.length
    if (diff > 0) {
      for (let i = 0; i < diff; i++) {
        // take letter of index i from key and add to the end
        key += key[i]
      }
    }
    // adjust key for non alphabetic chars
    message.split('').forEach((el, idx) => {
      if (el.match(nonAlphChar)) {
        key = key.slice(0, idx) + ' ' + key.slice(idx)
      }
    })
    // console.log(`keylength: ${key.length}, message length: ${message.length}`)
    return key
  }
  // encrypting function
  encrypt(message, keyword) {
    if (!message || !keyword) throw new Error('Incorrect arguments!')
    this.genTable()
    // encrypted array
    let encryptedArr
    const nonAlphChar = /[^A-Za-z]/g

    // generate key
    let keyGen = this.genKey(message, keyword)

    // let's encode the message
    let encrChar
    encryptedArr = message.split('').map((el, idx) => {
      // console.log(`\nel - ${el}, idx - ${idx}`)

      // check for non alphabetic LIKE COOL BOYZ DO
      if (!RegExp(/^\p{L}/, 'u').test(el)) {
        // console.log(`if - ${el} non-alphabetic`)

        return el
      } else {
        el = el.toLowerCase()
        // console.log(`else - ${el} alphabetic`)

        // find index of key character in alphabet by index and

        encrChar = this.table[this.table[0].indexOf(el)][this.table[0].indexOf(keyGen.charAt(idx))]
        return encrChar
      }
    })
    return this.reverseTrue === false ? encryptedArr.reverse().join('').toUpperCase() : encryptedArr.join('').toUpperCase()
  }

  decrypt(mess, key) {
    if (!mess || !key) throw new Error('Incorrect arguments!')
    this.genTable()
    // encrypted array
    let decryptedArr
    const nonAlphChar = /[^A-Za-z]/g

    // generate key
    let keyGen = this.genKey(mess, key)

    // let's decode the message
    let encrChar
    decryptedArr = mess.split('').map((el, idx) => {
      // console.log(`\nel - ${el}, idx - ${idx}`)

      // check for non alphabetic LIKE COOL BOYZ DO
      if (!RegExp(/^\p{L}/, 'u').test(el)) {
        // console.log(`if - ${el} non-alphabetic`)
        return el
      } else {
        el = el.toLowerCase()
        // console.log(`else - ${el} alphabetic`)

        // find index of key char in alphabet
        this.table[this.table[0].indexOf(keyGen.charAt(idx))]

        // find el idx in shifted arr -> choose el with same index from normal alphabet
        encrChar = this.table[0][this.table[this.table[0].indexOf(keyGen.charAt(idx))].indexOf(el)]
        return encrChar
      }
    })
    return this.reverseTrue === false ? decryptedArr.reverse().join('').toUpperCase() : decryptedArr.join('').toUpperCase()
  }
}

// // *** Uncomment for testing
// const directMachine = new VigenereCipheringMachine()
// const reverseMachine = new VigenereCipheringMachine(false)

// check key generator check
// console.log(directMachine.genKey('abc', 'def')) // def
// console.log(directMachine.genKey('abc def123', 'ghi')) // def

// check alphabet table
// console.log(directMachine.genTable())
// console.log(directMachine.table)

// // 'must throw an Error if no args'

// directMachine.encrypt('lala')
// directMachine.encrypt(undefined, 'key')
// directMachine.encrypt()
// reverseMachine.encrypt('lala')
// reverseMachine.encrypt(undefined, 'key')
// reverseMachine.encrypt()
// directMachine.decrypt('lala')
// directMachine.decrypt(undefined, 'key')
// directMachine.decrypt()
// reverseMachine.decrypt('lala')
// reverseMachine.decrypt(undefined, 'key')
// reverseMachine.decrypt()

// => 'Incorrect arguments!'

/// 'base encryption'
//
// console.log(directMachine.encrypt('abc', 'def')) // 'DFH' WORKING!!!!
// console.log(directMachine.encrypt('ab c', 'def')) // 'DF H' !!!
// console.log(directMachine.encrypt('ab c!', 'def')) // 'DF H!' WORKING!!!
// console.log(directMachine.encrypt('cryptography', 'verylongkeyword')) // 'XVPNECTXKTFU' WORKING!!!
// console.log(directMachine.encrypt('samelengthkey', 'samelengthkey')) // 'KAYIWIAMMOUIW' WORKING!!!
// console.log(directMachine.encrypt('Samelengthkey', 'Samelengthkey')) // 'KAYIWIAMMOUIW' WORKING!!!
// console.log(directMachine.encrypt('attack at dawn!', 'alphonse')) // 'AEIHQX SX DLLU!'  WORKING!!!
// console.log(directMachine.encrypt('Example of sequence: 1, 2, 3, 4.', 'lilkey')) // 'PFLWTJP WQ CIOFMYMI: 1, 2, 3, 4.'  WORKING!!!
// console.log(directMachine.encrypt('Same length key', 'Samelengthkey')) // 'KAYI WIAMMO UIW' WORKING!!!

// // 'base decryption'
// console.log(directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js')) // 'LEARN FRONTEND DEVELOPMENT :)' WORKING!!!
// console.log(directMachine.decrypt('ICWWQAM KECEIK JVZZT EADGG!', 'rollingscopes')) // 'ROLLING SCOPES SHOOL RULES!' WORKING!!!
// console.log(directMachine.decrypt('TRVVFB VT JSUIFMYL!', 'learning')) // 'INVEST IN YOURSELF!' WORKING!!!
// console.log(directMachine.decrypt('HSVD AJAL ^^', 'behappy')) // 'GOOD LUCK ^^' WORKING!!!
// console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse')) // '!ULLD XS XQHIEA' WORKING!!!
// console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')) // '!NWAD TA KCATTA' WORKING!!!

// // 'double-sided direct cryptography'
// for (let i = 2; i < 200; i += 1) {
//   const testStr = createTestString(i)
//   const testKey = createTestKey(i + (i % 2))
//   const encrypted = directMachine.encrypt(testStr, testKey)
//   console.log(directMachine.decrypt(encrypted, testKey), testStr)
// }

// // 'double-sided reverse cryptography 2'
// for (let i = 2; i < 200; i += 1) {
//   const testStr = createTestString(i)
//   const reversedTestStr = testStr.split('').reverse().join('')
//   const testKey = createTestKey(i - (i % 2))
//   const encrypted = reverseMachine.encrypt(reversedTestStr, testKey)
//   const reversedEncrypted = encrypted.split('').reverse().join('')
//   assert.equal(reverseMachine.decrypt(reversedEncrypted, testKey), testStr)
// }
