import test from 'ava';

import reduce from '../src/reduce.js';

const add = (a, b) => a + b;

test('reduce should work on any types', t => {
  t.is(reduce(add, 10, 32), 42, 'should work with 42');
  t.deepEqual(reduce(add, 0, [1, 2, 3]), 6, 'should work with Array');
  t.deepEqual(reduce(add, 1, { foo: 2, bar: 3 }), 6, 'should work with Object');
});
