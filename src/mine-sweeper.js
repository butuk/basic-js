const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  //throw new NotImplementedError('Not implemented');
  let resultMatrix = [];
  for (let i = 0, rows = matrix.length; i < rows; i++) {
    resultMatrix.push([]);
  }

  for (let i = 0, rows = matrix.length; i < rows; i++) {
    for(let j = 0, columns = matrix[i].length; j < columns; j++) {
      let minesNum = 0;
      if(i > 0 && j > 0 && matrix[i-1][j-1]){
        minesNum++;
      }
      if(i > 0 && matrix[i-1][j]){
        minesNum++;
      }
      if(i > 0 && j < (columns - 1) && matrix[i-1][j+1]){
        minesNum++;
      }
      if(j > 0 && matrix[i][j-1]){
        minesNum++;
      }
      if(j < (columns - 1) && matrix[i][j+1]){
        minesNum++;
      }
      if(i < (rows - 1) && j > 0 && matrix[i+1][j-1]){
        minesNum++;
      }
      if(i < (rows - 1) && matrix[i+1][j]){
        minesNum++;
      }
      if (i < (rows - 1) && j < (columns - 1) && matrix[i+1][j+1]){
        minesNum++;
      }
      resultMatrix[i][j] = minesNum;
    }
  }

  return resultMatrix;
}

/*console.log(minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false]
]))*/

module.exports = {
  minesweeper
};
