import test from 'ava';

import typeOf from '../src/typeOf.js';

test('typeOf should return the good type of all common types', t => {
  t.is(typeOf(undefined), 'undefined', 'undefined should have the type "undefined"');
  t.is(typeOf(null), 'null', 'null should have the type "null"');
  t.is(typeOf(true), 'Boolean', 'true should have the type "Boolean"');
  t.is(typeOf(false), 'Boolean', 'false should have the type "Boolean"');
  t.is(typeOf(0), 'Number', '0 should have the type "Number"');
  t.is(typeOf(42), 'Number', '0 should have the type "Number"');
  t.is(typeOf(13.0879), 'Number', '0 should have the type "Number"');
  t.is(typeOf(''), 'String', '"" should have the type "String"');
  t.is(typeOf('foo'), 'String', '"foo" should have the type "String"');
  t.is(typeOf([]), 'Array', '[] should have the type "Array"');
  t.is(typeOf([1, 2, 3]), 'Array', '[1, 2, 3] should have the type "Array"');
  t.is(typeOf({}), 'Object', '{} should have the type "Object"');
  t.is(typeOf({ foo: 'bar' }), 'Object', '{foo: "bar"} should have the type "Object"');
  t.is(typeOf(typeOf), 'Function', 'typeOf should have the type "Function"');
  t.is(typeOf(new Date()), 'Date', 'new Date() should have the type "Date"');
  t.is(typeOf(new Error()), 'Error', 'new Error() should have the type "Error"');
  t.is(typeOf(/a/), 'RegExp', '/a/ should have the type "RegExp"');
});

test('typeOf should return the good type for custom class', t => {
  class Foo {}
  class Bar extends Foo {}
  const Baz = (x) => x;
  function Yay() {}

  t.is(typeOf(Foo), 'Function', 'typeOf(class) should return "Function"');
  t.is(typeOf(new Foo()), 'Foo', 'typeOf(new Foo()) should return "Foo"');
  t.is(typeOf(new Bar()), 'Bar', 'typeOf(new Bar()) should return "Bar"');
  t.is(typeOf(new Baz()), 'Baz', 'typeOf(new Baz()) should return "Baz"');
  t.is(typeOf(new Yay()), 'Yay', 'typeOf(new Yay()) should return "Yay"');
});
