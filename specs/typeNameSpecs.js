import test from 'ava';

import typeName from '../src/typeName.js';

test('typeName sould return the name a function if it is a function, else typeOf(value)', t => {
  t.is(typeName(false), 'Boolean', 'false should have the type name "Boolean"');
  t.is(typeName(Boolean), 'Boolean', 'Boolean should have the type name "Boolean"');
});
