import test from 'ava';

import map from '../src/map.js';

const exists = (x) => !!x;

test('map should work on any types', t => {
  t.is(map(exists, undefined), false, 'should work with undefined');
  t.is(map(exists, null), false, 'should work with null');
  t.is(map(exists, 42), true, 'should work with 42');
  t.deepEqual(map(exists, [null, 42, []]), [false, true, true], 'should work with Array');
  t.deepEqual(
    map(exists, { foo: null, bar: 42 }),
    { foo: false, bar: true },
    'should work with Object'
  );
});
