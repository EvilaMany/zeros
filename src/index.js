module.exports = function getZerosCount(number) {
  var result = 0;

  for(var dev = 5; dev <= number;dev*=5)
  {
  	result += Math.floor(number / dev)
  }
  return result;
}