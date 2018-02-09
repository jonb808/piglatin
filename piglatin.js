
//takes array of strings returns array of strings containing simplified
function piglatin(sList) {
  return _.map(sList, function(memo) {return memo + '-ay';} );
}

console.log(piglatin(['apple', 'pear']));
