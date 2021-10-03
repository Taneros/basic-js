import { NotImplementedError } from '../extensions/index.js'

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  if (names.length === 0) return []

  const fileNames = names.reduce((acc, el, idx) => {
    console.log(`acc = ${acc} el = ${el} idx = ${idx}`)

    function searchSame(el_) {
      let count = 1
      while (acc.includes(el_)) {
        el_ = el + `(${count++})`
      }
      return el_
    }

    if (acc.length === 0) {
      acc.push(el)
    } else if (acc.includes(el)) {
      el = searchSame(el)
      acc.push(el)
    } else {
      acc.push(el)
    }
    return acc
  }, [])
  return fileNames
}

// console.log(renameFiles(['file', 'file', 'image', 'file(1)', 'file'])) // => ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
// console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc'])) //, ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)'])
// console.log(renameFiles(['a', 'b', 'cd', 'b ', 'a(3)'])) //, ['a', 'b', 'cd', 'b ', 'a(3)'])
// console.log(renameFiles([])) //, [])
