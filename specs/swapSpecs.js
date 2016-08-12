import test from 'ava';

import swap from '../src/swap';

const sub = (a, b) => a - b;

test('swap must take a function an 2 params and change the order of this 2 params', t => {
  t.is(swap(sub, 5, 8), 3, 'swap(sub, 5, 8) should be equal to 3');
});

test('swap first param must be a function', t => {
  t.throws(swap.bind(null, 1, 2, 3), TypeError, 'swap(1, 2, 3) should thown a TypeError');
});
