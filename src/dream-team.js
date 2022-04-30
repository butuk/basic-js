const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
  function createDreamTeam(members) {
    //throw new NotImplementedError('Not implemented');
    if(Array.isArray(members) === false) {
      return false
    }
    let letters = [];
    for (let member of members) {
      if(typeof member === 'string') {
        letters.push(member.split('').find(item => item !== ' ').toUpperCase());
      }
    }
    return  letters.sort().join('');
    //console.log(letters.sort().join(''))
  }


  //createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']);


module.exports = {
  createDreamTeam
};
