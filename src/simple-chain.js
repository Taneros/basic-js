import { NotImplementedError } from '../extensions/index.js'

/**
 * Implement chainMaker object according to task description
 *
 */

export default {
  // uncomment line 10 and comment line 8
  // const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push('( )')
    } else {
      this.chain.push(`( ${value} )`)
    }
    return this
  },
  removeLink(value) {
    if (isNaN(value) || value < 1 || value > this.chain.length || value % 1 > 0) {
      this.chain = []
      throw new Error("You can't remove incorrect link!")
    }
    // find element and delete it
    if (value > -1) {
      this.chain.splice(value - 1, 1)
    }
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let returnChain = this.chain.join('~~')
    this.chain = []
    return returnChain
  },
}

// 'base requirements'

// console.log(chainMaker.getLength())
// console.log(chainMaker.addLink('cool').addLink('cool').finishChain())
// console.log(chainMaker.addLink('cool').addLink('cool').addLink('poo').finishChain())
// console.log(chainMaker.addLink('cool').addLink('cool').addLink('poo').removeLink('poo').finishChain())
// console.log(chainMaker.addLink('cool-1').addLink('cool-2').addLink('poo').removeLink(2).finishChain())
// console.log(chainMaker.addLink('cool-1').addLink('cool-2').addLink('poo').reverseChain().finishChain())

// ** chaining works

// console.log(
//   chainMaker
//     .addLink(function () {})
//     .addLink('2nd')
//     .addLink('3rd')
//     .removeLink(2)
//     .reverseChain()
//     .finishChain()
// ) // -> '( 3rd )~~( function () { } )');

// ** 'throws an Error with message "You can\'t remove incorrect link!" on trying to remove wrong link'
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0)) //->'You can\'t remove incorrect link!')
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'))  ->'You can\'t remove incorrect link!')
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2)) // ->'You can\'t remove incorrect link!')
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4)) // ->'You can\'t remove incorrect link!')
