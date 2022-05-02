const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr ) {
  //throw new NotImplementedError('Not implemented');
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  };

  let tempArr = arr.filter(item => item !== -1).sort(compareNumeric);
  let resultArr = [];

  for (let i = 0, length = arr.length; i < length; i++) {
    if(arr[i] === -1) {
      resultArr.push(-1);
    } else  {
      resultArr.push(tempArr[0]);
      tempArr.shift();
    }
  }

  return resultArr;
}

//console.log(sortByHeight([-1, 150, 160, 170, -1, -1, 180, 190]));

module.exports = {
  sortByHeight
};
