const { NotImplementedError } = require('../extensions/index.js');

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
function renameFiles( names ) {
  // throw new NotImplementedError('Not implemented');

  let tempArr = [];
  let namesMap = new Map();

  for(let name of names) {
    namesMap.set(name, (names.filter(item => item === name)).length);
  }

  if (names.length === namesMap.size) {
    return names;
  }

  for (i = names.length-1; i >= 0; i--) {
    if (namesMap.get(names[i]) > 1) {
      let k = namesMap.get(names[i])-1;
      let newName = `${names[i]}(${k})`;
      namesMap.set(names[i], k);
      tempArr.unshift(newName);
    } else {
      tempArr.unshift(names[i]);
    }
  }

  return renameFiles(tempArr);
}

// console.log(renameFiles(["file", "file", "image", "file", "file(2)"]));

module.exports = {
  renameFiles
};
