// const { NotImplementedError } = require('../extensions/index.js');

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
  //throw new NotImplementedError('Not implemented');
  if(typeof n === 'string') {
    if (n.length === 17) {
      let pairsArray = n.split('-');
      for (let pair in pairsArray) {
        pair.split('');
      }

      for (let i = 0; i < pairsArray.length; i++) {
        for (let j = 0; j < pairsArray[i].length; j++) {
          let item = pairsArray[i][j];

          console.log()
          item = parseInt(item, 16);
          return !isNaN(item);

        }
      }
    }
  }
  return false;

}

console.log(isMAC48Address('00-1B-63-84-45-T6'));

/*module.exports = {
  isMAC48Address
};*/
