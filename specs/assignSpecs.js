import test from 'ava';

import assign from '../src/assign.js';

test('assign should merge 2 object with no mutation', t => {
  const a = { foo: 3, bar: 'baz' };
  const b = { foo: 'bar', baz: { foo: 6 } };
  const value = assign(a, b);
  const excepted = { foo: 'bar', bar: 'baz', baz: { foo: 6 } };

  t.deepEqual(value, excepted, 'sould be merge in the good order');
});

test('assign should be curried', t => {
  t.true(typeof assign({}) === 'function');
});

test('assign should accept only 2 Objects', t => {
  const wrapped = (...args) => () => assign.apply(null, args);
  t.throws(wrapped(3, {}), TypeError, 'assign(Number, Object)');
  t.throws(wrapped({}, 'foo'), TypeError, 'assign(Object, String)');
});
