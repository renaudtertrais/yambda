import test from 'ava';

import curry from '../src/curry.js';

test('curry should curry functions', t => {
  const add = (a, b) => a + b;
  const addCurried = curry(add);
  t.true(typeof addCurried(2) === 'function', 'addCurried(2) should return a function');
  t.is(addCurried(2)(3), add(2, 3), 'addCurried(2)(3) should be equal to add(2, 3)');
  t.is(addCurried(2)(3), addCurried(2, 3), 'addCurried(2)(3) should be equal to addCurried(2, 3)');
});

test('curry should accept only one function', t => {
  const wrapped = (fn) => () => curry(fn);
  t.throws(wrapped(3), TypeError, 'curry(3) should trigger a TypeError');
  t.throws(wrapped({}), TypeError, 'curry({}) should trigger a TypeError');
});
