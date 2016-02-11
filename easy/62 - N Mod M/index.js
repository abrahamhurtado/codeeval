module.exports = function modulo (number, divisor) {
  return number - (parseInt(number / divisor) * divisor);
};
