const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if (typeof n === 'string' && n.length === 17) {
    let pairsArr = n.split('-');
    let symbolsArr = [];
    for (let pair of pairsArr){
      let innerArr = pair.split('');
      symbolsArr.push(innerArr);
    }
    let numbersCount = 0;
    for (let i = 0; i < symbolsArr.length; i++) {
      for (let j = 0; j < symbolsArr[i].length; j++) {
        if (!isNaN(parseInt(symbolsArr[i][j], 16))) {
          numbersCount++;
        }
      }
    }
    return numbersCount === 12;
  }
  return false;
}

module.exports = {
  isMAC48Address
};
