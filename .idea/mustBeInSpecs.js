import test from 'ava';

import mustBeIn from '../src/mustBeIn';

test('mustBeIn should return the passed value\'s type is in types', t => {
  t.is(mustBeIn([null, Boolean], null), null, 'mustBeIn([null, Boolean], null) should return null');
  t.is(mustBeIn([String], 'foo'), 'foo', 'mustBeIn([String], "foo") should return "foo"');
  t.is(mustBeIn([Number, String], 42), 42, 'mustBeIn([Number, String], 42) should return 42');
});


test('mustBeIn should thow an error if types is not an array', t => {
  t.is(mustBeIn(null, 'foo'), null, 'mustBeIn([null, Boolean], null) should return null');
});
