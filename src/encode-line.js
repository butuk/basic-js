const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  // throw new NotImplementedError('Not implemented');

 /* let lettersMap = new Map();

  for (let letter of str) {
    lettersMap.set(letter, str.split('').filter(item => item === letter).length);
  }

  let tempArr = [];

  for (let entry of lettersMap.keys()) {

    if(lettersMap.get(entry) > 1) {
      tempArr.push(lettersMap.get(entry));
      tempArr.push(entry);
    } else {
      tempArr.push(entry);
    }
  }

  return tempArr.join('');*/
  let result = [];

  for(let i = 0; i <= str.length-1;) {
    let counter = 0;

    for(let j = i; j <= str.length; j++) {
      let  arr = [];
      if(str[i] !== str[j]){
        if (counter > 1) {
          arr = [counter, str[i]];
        } else {
          arr = [str[i]]
        }
        let temStr = arr.join('');
        result.push(temStr);
        break;
      } else {
        counter++;
      }

    }

    i += counter;
  }

  return result.join('');

}

// console.log(encodeLine('aabbbc'));

module.exports = {
  encodeLine
};
