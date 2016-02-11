module.exports = function stringMask (word, binary) {
  return word.split('').map((letter, index) => {
    if (binary[index] === '1') {
      return letter.toUpperCase();
    } else {
      return letter;
    }
  }).join('');
};
