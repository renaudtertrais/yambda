import test from 'ava';

import keys from '../src/keys';

test('keys should return an array of keys of an object', t => {
  t.deepEqual(keys({ foo: 1, bar: 2, baz: 3 }), ['foo', 'bar', 'baz']);
});

test('keys should work om empty object', t => {
  t.deepEqual(keys({}), []);
});
