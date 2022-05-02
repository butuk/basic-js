const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let map1 = createMap(s1);
  let map2 = createMap(s2);

  function createMap (word) {
    let arr = word.split('');
    let map = new Map();
      for(let element of arr) {
        let count = 0;
        for(let otherElement of arr) {
          if (element === otherElement) {
            count++;
          }
        }
        map.set(element, count)
      }
    return map;
  }

  let num = 0;
  for (let letter of map1.keys()){
    for (let secondLetter of map2.keys()) {
      if (letter === secondLetter) {
        if (map1.get(letter) < map2.get(secondLetter)){
          num += map1.get(letter);
        } else {
          num += map2.get(secondLetter);
        }
      }
    }
  }
  console.log(num)
  return num;
}

module.exports = {
  getCommonCharacterCount
};
