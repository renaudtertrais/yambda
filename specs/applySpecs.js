import test from 'ava';

import apply from '../src/apply.js';

const add = (a, b) => a + b;

test('apply should "apply" an array of params to a function', t => {
  t.true(apply(add, [2, 3]) === 5);
});

test('apply should be curried', t => {
  t.true(typeof apply(add) === 'function');
});

test('apply should accept only a function and an array', t => {
  const wrapped = (...args) => () => apply.apply(null, args);
  t.throws(wrapped(3, []), TypeError, 'apply(Number, Array)');
  t.throws(wrapped(add, 'foo'), TypeError, 'apply(Function, String)');
  t.throws(wrapped([], Function), TypeError, 'apply(Array, Function)');
});
