const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');

  if(!(arr instanceof Array)) {
    throw Error ("'arr' parameter must be an instance of the Array!");
  }

  let resultArr = [];

  for (let i = 0, total = arr.length; i < total; i++) {
    if (arr[i] === '--discard-prev') {
      if(i > 0 ) {
        resultArr.pop();
      }
    } else if (arr[i] === '--double-prev') {
      if(i > 0) {
        resultArr.push(resultArr[i-1]);
      }
    } else if (arr[i] === '--double-next') {
      if(i < total-1) {
        resultArr.push(arr[i+1]);
      }
    } else if (arr[i] === '--discard-next') {
      if(i < total-1){
        arr.splice(i+1, 1);
      }
    } else {
      resultArr.push(arr[i]);
    }
  }

  return resultArr;
}

transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]);

module.exports = {
  transform
};
