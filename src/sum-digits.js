//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let str = n.toString(10);
  if(str.length <= 1) {
    console.log(n); // показывает 2
    return n;
  }

  let arr = str.split('');
  let arrNew = [];
  for(let element of arr) {
    element = parseInt(element, 10);
    arrNew.push(element);
  }
  let result = arrNew.reduce((sum, current) => sum + current, 0);

  getSumOfDigits(result);
}

console.log(getSumOfDigits(245)); // показывает undefined

/*
module.exports = {
  getSumOfDigits
};
*/
