import test from 'ava';

import is from '../src/is.js';

class Foo {}
const foo = new Foo();

test('is should return true if 1st param is the contructor(class) of the 2nd', t => {
  t.true(is(Boolean, false), 'false should be an Boolean');
  t.true(is(Number, 3), '3 should be an Number');
  t.true(is(String, 'foo'), '"foo" should be an String');
  t.true(is(Function, (x) => x), '(x) => x should be an Function');
  t.true(is(Array, []), '[] should be an Array');
  t.true(is(Object, {}), '{} should be an Object');
  t.true(is(RegExp, /^$/), '/^$/ should be an RegExp');
  t.true(is(Date, new Date()), 'new Date() should be an Date');
  t.true(is(Error, new Error()), 'new Error() should be an Error');
  t.true(is(Foo, foo), 'should works for classes');
  t.true(is(Function, Boolean), 'Boolean should be a Function');
});

test('is should return true if 1st param has the same type of the 2nd one', t => {
  t.true(is(undefined, undefined), 'undefined should have same type as undefined');
  t.true(is(null, null), 'null should have same type as null');
  t.true(is(true, false), 'true should have same type as false');
  t.true(is(3, 42), '3 should have same type as 42');
  t.true(is('foo', 'bar'), '"foo" should have same type as "bar"');
  t.true(is([], [1]), '[] should have same type as [1]');
  t.true(is({ foo: 2 }, { bar: 2 }), '{foo: 2} should have same type as {bar: 2}');
  t.true(is(/^a$/, new RegExp()), '/^a$/ should have same type as new RegExp()');
  t.true(is(new Date(), new Date()), 'new Date() should have same type as new new Date()');
});

test('is should return false if the 2 params have not the same type', t => {
  t.false(is(String, ['foo']), '["foo"] should not be a String');
  t.false(is({}, []), '{} should not have same type as []');
  t.false(is(Number, '2'), '"2" should not be Number');
  t.false(is(Object, 3), '3 should not be Object');
  t.false(is(Object, 'foo'), '"foo" should not be Object');
  t.false(is(Object, []), '[] should not be Object');
});

test('is should work on edge cases', t => {
  class Bar extends Foo {}
  t.false(is(null, undefined), 'null should not have same type as undefined');
  t.false(is('', null), '"" should not have same type as null');
  t.false(is(false, 0), 'false should not have same type as 0');
  t.true(is(Foo, Bar), 'child class should have the same type its parent class');
  t.false(is(Bar, Foo), 'parent class should not have the same type its child class');
  t.false(is(Object, Foo), 'classes should not be Object');
});

