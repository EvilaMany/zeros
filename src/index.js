module.exports = function getZerosCount(number) {
  let result = 0;

  for(let dev = 5; dev <= number;dev*=5)
  {
  	result += Math.floor(number / dev)
  }
  return result;
}