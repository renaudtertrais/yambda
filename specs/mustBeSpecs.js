import test from 'ava';

import mustBe from '../src/mustBe.js';

test('mustBe should return the passed value if it has the good type', t => {
  t.is(mustBe(undefined, undefined), undefined, 'mustBe(undefined, undefined)' +
    ' should return undefined');
  t.is(mustBe(null, null), null, 'mustBe(null, null) should return null');
  t.is(mustBe(Boolean, true), true, 'mustBe(Boolean, true) should return true');
  t.is(mustBe(Boolean, false), false, 'mustBe(Boolean, false) should return false');
  t.is(mustBe(Number, 42), 42, 'mustBe(Number, 42) should return 42');
  t.is(mustBe(String, ''), '', 'mustBe(String, "") should return ""');

  const arr = [1, 2, 3];
  t.is(mustBe(Array, arr), arr, 'mustBe should return the same ref');
  t.deepEqual(mustBe(Array, arr), [1, 2, 3], 'mustBe(Array, [1, 2, 3]) should return [1, 2, 3]');
  t.deepEqual(mustBe(Object, { foo: 3 }), { foo: 3 }, 'mustBe(Object, {foo: 3}) should' +
    ' return {foo: 3}');

  const date = new Date();
  t.deepEqual(mustBe(Date, date), date, 'mustBe(Date, date) should return date');
});

test('mustBe should throw a TypeError with the good message if type is not good', t => {
  const wrapped = (...args) => () => mustBe.apply(null, args);
  t.throws(wrapped(Number, 'foo'), TypeError, 'mustBe(Number, "foo")');
});
