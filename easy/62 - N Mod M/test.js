var test = require('ava');
var modulo = require('./index');

test('Given the numbers 2 and 3, the mod should be 2', (t) => {
  const actual = modulo(2, 3);
  const expected = 2;

  t.is(actual, expected);
});

test('Given the numbers 4 and 2, the mod should be 0', (t) => {
  const actual = modulo(4, 2);
  const expected = 0;
  t.is(actual, expected);
});

test('Given the numbers 1 and 0, the mod should return NaN', (t) => {
  const actual = modulo(1, 0);

  if (isNaN(actual)) {
    t.pass();
  } else {
    t.fail();
  }
});
