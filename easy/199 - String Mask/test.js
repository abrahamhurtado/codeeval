var test = require('ava');
var stringMask = require('./index');

test('Given the word "hello" and the binary code 11001, the output should be "HEllO"', (t) => {
  const actual = stringMask('hello', '11001');
  const expected = 'HEllO';
  t.is(actual, expected);
});

test('Given the word "world" and the binary code 10000, the output should be "World"', (t) => {
  const actual = stringMask('world', '10000');
  const expected = 'World';
  t.is(actual, expected);
});

test('Given the word "cba" and the binary code 111, the output should be "CBA"', (t) => {
  const actual = stringMask('cba', '111');
  const expected = 'CBA';
  t.is(actual, expected);
});
