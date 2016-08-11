import test from 'ava';

import clone from '../src/clone.js';

const obj = { foo: 'bar', bar: { baz: 3 }, baz: [1, 2, 3] };
const arr = [1, false, 0, { foo: 2 }];

test('clone should return a copy of an Array or an Object', t => {
  t.not(obj, clone(obj), 'clone of an object should not have the same reference');
  t.deepEqual(obj, clone(obj), 'clone of an object should be deep equal to this object');
  t.not(arr, clone(arr), 'clone of an array should not have the same reference');
  t.deepEqual(arr, clone(arr), 'clone of an array should be deep equal to this array');
});

test('clone should not return a deep copy, nested array or object are copied by reference', t => {
  t.is(obj.bar, clone(obj).bar, 'nested object should be copy by reference');
  t.is(obj.baz, clone(obj).baz, 'nested array should be copy by reference');
});

test('clone should not have effect on primitive types', t => {
  t.is('foo', clone('foo'), '"foo" should be equal to clone("foo")');
  t.is(42, clone(42), '42 should be equal to clone(42)');
});
